$(document).ready(function () {
    console.log('asd');

    $('#actualizaru').hide();


    mostrarusuario();

    $.ajax({
        type: "GET",
        url: "../tipousuario/mostrartu.php",
        dataType: 'json',
        success: function(data) {
            var select = $('#tu');
            $.each(data, function(index, option) {
                select.append($('<option>', {
                    value: option.id_tipo_usuario,
                    text: option.nombre_tipous
                }));
            });
        },
        error: function() {
            alert('Error al obtener las opciones');
        }
    });
});





$(document).on('click','#btnel', function () {
    let id = $(this).val()
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "eliminar.php",
        data: {id},
        success: function (response) {
            mostrarusuario();
            console.log('eliminado');
        }
    });

});





$('#actualizaru').click(function (e) { 

    let data = $('#form').serialize();
    $.ajax({
        type: "POST",
        url: "actualizar.php",
        data: data,
        
        success: function (response) {
            mostrarusuario();
            console.log(response);
            $('#actualizaru').hide();
            $('#insertaru').show();
        }
    });
    
});


$(document).on('click','#btned', function () {
    let id = $(this).val()
    console.log(id);
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "cargar.php",
        data: {id},
        success: function (response) {
            let data = JSON.parse(response);
            $('#id').val(data.id_usuario);
            $('#tu').val(data.id_tipo_usuario);
            $('#nombre_usuario').val(data.nombre_usuario);
            $('#correo').val(data.correo);
            $('#pass').hide();  
            $('#fecha').val(data.fecha);
            $('#actualizaru').show();
            $('#insertaru').hide();
        }
    });
});

    function mostrarusuario(){

        $.ajax({
            type: "GET",
            url: "mostraru.php",
    
            success: function (response) {
                let data = JSON.parse(response)
                console.log(data);
                let lista = '';
                $.each(data, function (index, value) { 
                    lista+=`
                    <tr>
                        <td>${value.id_usuario}</td>
                        <td>${value.nombre_tipous}</td>
                        <td>${value.nombre_usuario}</td>
                        <td>${value.correo}</td>
                        <td>${value.fecha}</td>
                        <td> 
                            <button class="btn btn-success" id="btned" value="${value.id_usuario}">Editar</button>
                            <button class="btn btn-warning" id="btncamb" value="${value.id_usuario}">Cambiar contraseña</button>
                            <button class="btn btn-danger" id="btnel" value="${value.id_usuario}">Eliminar</button>
                        </td>
                        
                    </tr>
                    `
                });
                $('#lista3').html(lista);
            }
        });
    
    }


$('#insertaru').click(function (e) { 
    let data = $('#form').serialize();
    console.log(data)

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,

        success: function (response) {
            mostrarusuario();
            console.log('insertado');
        }
    });
    
});

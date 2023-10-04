$(document).ready(function () {
    console.log('asd');
    $('#actualizartu').hide();
    mostrartipousuario();
});


$(document).on('click','#btnel', function () {
    let id = $(this).val()
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "eliminar.php",
        data: {id},
        success: function (response) {
            mostrartipousuario();
            console.log('eliminado');
        }
    });

});




$('#actualizartu').click(function (e) { 
    let data = $('#form').serialize();
    console.log(data)

    $.ajax({
        type: "POST",
        url: "actualizar.php",
        data: data,

        success: function (response) {
            mostrartipousuario();
            console.log('actualizado');
        }
    });
    
});



$(document).on('click','#btned', function () {
    let id = $(this).val()
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "cargar.php",
        data: {id},
        success: function (response) {
            let data = JSON.parse(response)
            $('#id').val(data.id_tipo_usuario);
            $('#nombre').val(data.nombre_tipous);

            $('#actualizartu').show();
            $('#insertartu').hide();
        }
    });

});



    function mostrartipousuario(){

        $.ajax({
            type: "GET",
            url: "mostrartu.php",
    
            success: function (response) {
                let data = JSON.parse(response)
                console.log(data);
                let lista = '';
                $.each(data, function (index, value) { 
                    lista+=`
                    <tr>
                        <td>${value.id_tipo_usuario}</td>
                        <td>${value.nombre_tipous}</td>
                        <td>
                            <button class="btn btn-success" id='btned' name='btned' value='${value.id_tipo_usuario}'>Editar</button>
                            <button class="btn btn-success" id='btnel' name='btnel' value='${value.id_tipo_usuario}'>Eliminar</button>
                        </td>
                        
                    </tr>
                    `
                });
                $('#lista3').html(lista);
            }
        });
    
    }


$('#insertartu').click(function (e) { 
    let data = $('#form').serialize();
    console.log(data)

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,

        success: function (response) {
            mostrartipousuario();
            console.log('insertado');
        }
    });
    
});

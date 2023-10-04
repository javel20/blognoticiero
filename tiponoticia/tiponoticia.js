$(document).ready(function () {
    console.log('asd');
    $('#actualizartn').hide();
    mostrartiponoticia();
});

$('#actualizartn').click(function (e) { 

    let data = $('#form').serialize();
    $.ajax({
        type: "POST",
        url: "actualizar.php",
        data: data,
        
        success: function (response) {
            mostrartiponoticia();
            console.log(response);
            $('#actualizartn').hide();
            $('#insertartn').show();
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
            $('#id').val(data.id_tipo_noticia);
            $('#nombre').val(data.nombre_not);
            $('#actualizartn').show();
            $('#insertartn').hide();
        }
    });
});



function mostrartiponoticia(){

        $.ajax({
            type: "GET",
            url: "mostrartn.php",
    
            success: function (response) {
                let data = JSON.parse(response)
                console.log(data);
                let lista = '';
                $.each(data, function (index, value) { 
                    lista+=`
                    <tr>
                        <td>${value.id_tipo_noticia}</td>
                        <td>${value.nombre_not}</td>
                        <td>
                            <button class="btn btn-success" id="btned" value="${value.id_tipo_noticia}">Editar</button>
                            <button class="btn btn-success" id="btnel" value="${value.id_tipo_noticia}">Eliminar</button>
                        </td>
                    </tr>
                    `
                });
                $('#lista3').html(lista);
            }
        });
    
    }


$('#insertartn').click(function (e) { 
    let data = $('#form').serialize();
    console.log(data)

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,

        success: function (response) {
            mostrartiponoticia();
            console.log('insertado');
        }
    });
    
});

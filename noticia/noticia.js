$(document).ready(function () {
    console.log('asd');
    $('#actualizarn').hide();

    mostrarnoticia();

        $.ajax({
            type: "GET",
            url: "../tiponoticia/mostrartn.php",
            dataType: 'json',
            success: function(data) {
                var select = $('#tn');
                $.each(data, function(index, option) {
                    select.append($('<option>', {
                        value: option.id_tipo_noticia,
                        text: option.nombre_not
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
            mostrarnoticia();
            console.log('eliminado');
        }
    });

});



$('#actualizarn').click(function (e) { 

    let data = new FormData($('#formn')[0]);
    

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,
        contentType: false,
        processData:false,
        
        success: function (response) {
            $('#actualizarn').hide();
            $('#insertarn').show();
            console.log(response);
            mostrarnoticia();
        }
    });
    
});


$(document).on('click','#btned', function () {
    let id = $(this).val();
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "cargar.php",
        data: {id},
        success: function (response) {
            $('#actualizarn').show();
            $('#insertarn').hide();
            let data = JSON.parse(response)
            $('#id').val(data.id_noticia);
            $('#tn').val(data.id_tipo_noticia);
            $('#titulo').val(data.titulo);
            $('#descripcion').val(data.descripcion);
            $('#fecha').val(data.fecha);
            $('#imagen').val(data.imagen);
            

        }
    });
});

function mostrarnoticia(){

    $.ajax({
        type: "GET",
        url: "mostrarn.php",

        success: function (response) {
            let data = JSON.parse(response)

            let lista = '';
            $.each(data, function (index, value) { 
                lista+=`
                <tr>
                    <td>${value.id_noticia}</td>
                    <td>${value.titulo}</td>
                    <td>${value.descripcion}</td>
                    <td>${value.nombre_not}</td>    
                    <td>${value.imagen}</td>
                    <td>
                        <button button class="btn btn-success" id="btned" value="${value.id_noticia}">Editar</button>
                        <button button class="btn btn-success" id="btnel" value="${value.id_noticia}">Eliminar</button>
                    </td>
                    
                </tr>
                `
            });
            $('#lista').html(lista);
        }
    });

}


$('#insertarn').click(function (e) { 
    let data = new FormData($('#formn')[0]);
    

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,
        contentType: false,
        processData:false,

        success: function (response) {
            console.log('insertado');
        }
    });
    
});

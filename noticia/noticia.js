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

$('#actualizarn').click(function (e) { 

    let data = $('#formn').serialize();
    $.ajax({
        type: "POST",
        url: "actualizar.php",
        data: data,
        
        success: function (response) {
            console.log(response);
            $('#actualizartn').hide();
            $('#insertartn').show();
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
            let data = JSON.parse(response)
            $('#id').val(data.id_noticia);
            $('#tn').val(data.id_tipo_noticia);
            $('#titulo').val(data.titulo);
            $('#descripcion').val(data.descripcion);
            $('#imagen').val(data.imagen);
            $('#fecha').val(data.fecha);

            $('#actualizarn').show();
            $('#insertarn').hide();
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
                        <button button class="btn btn-success" id="btned" value="${value.id_noticia}">Eliminar</button>
                    </td>
                    
                </tr>
                `
            });
            $('#lista').html(lista);
        }
    });

}


$('#insertarn').click(function (e) { 
    let data = $('#formn').serialize();
    

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,

        success: function (response) {
            console.log('insertado');
        }
    });
    
});

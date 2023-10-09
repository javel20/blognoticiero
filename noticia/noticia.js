var tabla;
$(document).ready(function () {

    console.log('asd');
    $('#actualizarn').hide();


    // mostrarnoticia();
        
   
    tabla = $('#tabla').DataTable({
        "ajax":{
            "url": "mostrarn.php",
            "dataSrc":""
        },
        lengthMenu: [[3, 10, 25, -1], [3, 10, 25, "All"]],
        "columns":[
            
               {"data": "id_noticia"},
               {"data": "nombre_usuario"},
               {"data": "titulo"},
               {"data": "descripcion"},
               {"data": "nombre_not"},
               {"data": "imagen"},
               {"data": "id_noticia",
               "render": function(data, type, row) {
                   return '<button class="btn btn-success btn-editar" id="btned" value="' + data + '">Editar</button>';
               }}
            
        ],
        // "lengthChange": false
    });



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
    console.log("Datos a enviar:", data);
    

    $.ajax({
        type: "POST",
        url: "actualizar.php",
        data: data,
        contentType: false,
        processData:false,
        
        success: function (response) {
            $('#actualizarn').hide();
            $('#insertarn').show();
            console.log(response);
            tabla.ajax.reload();
        },
        error: function (error) {
            console.error("Error en la solicitud AJAX:", error);
        }
    });
    
});


$(document).on('click','#btned', function () {
    let id = $(this).val();
    console.log(id);
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "cargar.php",
        data: {id},
        success: function (response) {
            $('#actualizarn').show();
            $('#insertarn').hide();
            let data = JSON.parse(response)
            console.log(data);
            $('#id').val(data.id_noticia);
            $('#tn').val(data.id_tipo_noticia);
            $('#titulo').val(data.titulo);
            $('#descripcion').val(data.descripcion);
            $('#fecha').val(data.fecha);
            $('#imagen').html(data.imagen);

            

        }
    });
});

function mostrarnoticia(){



    // $.ajax({
    //     type: "GET",
    //     url: "mostrarn.php",

    //     success: function (response) {
    //         let data = JSON.parse(response)

    //         let lista = '';
    //         $.each(data, function (index, value) { 
    //             lista+=`
    //             <tr>
    //                 <td>${value.id_noticia}</td>
    //                 <td>${value.nombre_usuario}</td>
    //                 <td>${value.titulo}</td>
    //                 <td>${value.descripcion}</td>
    //                 <td>${value.nombre_not}</td>    
    //                 <td>${value.imagen}</td>
    //                 <td>
    //                     <button button class="btn btn-success" id="btned" value="${value.id_noticia}">Editar</button>
    //                     <button button class="btn btn-success" id="btnel" value="${value.id_noticia}">Eliminar</button>
    //                 </td>
                    
    //             </tr>
    //             `
    //         });
    //         $('#lista').html(lista);
    //     }
    // });

}


$('#insertarn').click(function (e) { 
    let data = new FormData($('#formn')[0]);
    console.log(data);

    $.ajax({
        type: "POST",
        url: "insertar.php",
        data: data,
        contentType: false,
        processData:false,

        success: function (response) {
           
            tabla.ajax.reload();
            console.log('insertado');
        }
    });
    
});


$(document).ready(function () {
    console.log('asd');

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
                        <button></button>
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

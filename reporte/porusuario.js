$(document).ready(function () {

        $.ajax({
            type: "GET",
            url: "../usuario/mostraru.php",
            dataType: 'json',
            success: function(data) {
                var select = $('#us');
                $.each(data, function(index, option) {
                    select.append($('<option>', {
                        value: option.id_usuario,
                        text: option.nombre_usuario
                    }));
                });
            },
            error: function() {
                alert('Error al obtener las opciones');
            }
        });
});

$('#buscar').click(function (e) { 
    e.preventDefault();

    let id = $('#us').val()

    $.ajax({
        type: "POST",
        url: "mostrarporusuario.php",
        data: {id},
        success: function (response) {
            let data = JSON.parse(response);
            console.log(data);
            let lista ='';
            $.each(data, function (index, value) { 
                lista+=`
                    <tr>
                    <td>${value.nombre_usuario}</td>
                    <td>${value.correo}</td>
                    <td>${value.titulo}</td>
                    <td>${value.descripcion}</td>
                    <td>${value.fecha}</td>

                    <td>
                        <button class="btn btn-success" id="btnes" value="${value.id}">Cambiar estado</button>
                    </td>
                </tr>
                `
            });
            $('#lista').html(lista);
        }
    });
    
});
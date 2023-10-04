$(document).ready(function () {
    console.log('asd');

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

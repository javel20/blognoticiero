$(document).ready(function () {
    console.log('asd');

    mostrartiponoticia();
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

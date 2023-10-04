$(document).ready(function () {
    console.log('asd');

    usuario();
});


    function usuario(){

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
                        <td>${value.nombre_usuario}</td>
                        <td>${value.nombre_tipous}</td>
                        
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

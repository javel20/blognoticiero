$(document).ready(function () {
    console.log('asd');
    mostrarnoticia();
    mostrarusuario();
});

function mostrarnoticia(){

    $.ajax({
        type: "GET",
        url: "mostrar.php",

        success: function (response) {
            let data = JSON.parse(response)
            console.log(data);
            let lista = '';
            $.each(data, function (index, value) { 
                lista+=`
                <tr>
                    <td>${value.id_noticia}</td>
                    <td>${value.titulo}</td>
                    <td>${value.descripcion}</td>
                    <td>${value.imagen}</td>
                    
                </tr>
                `
            });
            $('#lista').html(lista);
        }
    });

}

function mostrarusuario(){

    $.ajax({
        type: "GET",
        url: "mostrar.php",

        success: function (response) {
            let data = JSON.parse(response)
            console.log(data);
            let lista = '';
            $.each(data, function (index, value) { 
                lista+=`
                <tr>
                    <td>${value.id_usuario}</td>
                    <td>${value.id_tipo_usuario}</td>
                    <td>${value.nombre_usuario}</td>
                    <td>${value.correo}</td>
                    <td>${value.fecha}</td>
                    
                </tr>
                `
            });
            $('#lista2').html(lista);
        }
    });


}





$(document).ready(function () {
    console.log('asd');
    mostrarnoticia();
    mostrarusuario();
});


function redirigirASesion() {
    // Cambia la URL a la que deseas redirigir
    window.location.href = "loginfront.php";
}



function mostrarnoticia(){

    $.ajax({
        type: "GET",
        url: "noticia/mostrarn.php",

        success: function (response) {
            let data = JSON.parse(response)
            console.log(data);
            let lista = '';
            $.each(data, function (index, value) { 
                lista+=`

                        <img src='${value.imagen}' class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${value.titulo}</h5>
                            <p class="card-text">${value.descripcion}
                            <a href="#" class="btn btn-primary">Más información</a>
                        </div><br>
   
                
                `
            });
            $('#lista').html(lista);
        }
    });

}

function mostrarusuario(){

    $.ajax({
        type: "GET",
        url: "usuario/mostraru.php",

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





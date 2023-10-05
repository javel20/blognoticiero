$('#buscar').click(function (e) { 
    e.preventDefault();

    let fecha = $('#fecha').val()

    $.ajax({
        type: "POST",
        url: "mostrarporfecha.php",
        data: {fecha},
        success: function (response) {
            let data = JSON.parse(response);
            console.log(data);
            let lista ='';
            $.each(data, function (index, value) { 
                lista+=`
                    <tr>
                    <td>${value.nombre_usuario}</td>
                    <td>${value.correo}</td>
                    <td>${value.nombre_not}</td>
                    <td>${value.titulo}</td>
                    <td>${value.descripcion}</td>

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
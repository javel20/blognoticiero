function recuperar(){

    let form = $("#form_login");
    let user = $("#correo").val();
    let pass = $("#password").val();

    if(user.trim()==''){
        alert("usuario vacio");
        return;
    }else{
        // alert("continua");
    }

    if(pass.trim()==''){
        alert("password vacio");
        return;
    }else{
        // alert("continua");
    }

    $.ajax({
        type: "POST",
        url: "login.php",
        data: {"user":user,"pass":pass},
        dataType: "json",
        success: function (response) {
            if(response.valid==0){

                alert("usuario o contraseña incorrecto");
            }else if(response.valid==1) {
                // window.location.href = "menu.php";
                alert("correcto");
            }
        }
        
    });
}


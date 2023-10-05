<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <form action="" id="login" class="container">
        <div class="row justify-content-center my-3">
            <div class="col-2">
                <input type="email" class="form-control" id="correo" placeholder="Ingrese usuario">
                <input type="password" class="form-control" id="password" placeholder="Ingrese contraseña">
            </div>
        </div>


    </form>
    
    <div class="auth d-grid gap-2 col-2 mx-auto">
        <a href="javaScript:void(0)" class="btn btn-primary" onclick="login()">INICIAR SESION</a>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="login.js"></script>

</body>
</html>
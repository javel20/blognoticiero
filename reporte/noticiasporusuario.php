<?php
// session_start();

// if($_SESSION['usuario_nombre'] === null){
//     header("location: ../loginfront.php");
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
                <a class="navbar-brand" href="../menu.php">MENU PRINCIPAL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Noticias
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../noticia/menunoticiainsertar.php">Insertar noticia</a></li>
                            <li><a class="dropdown-item" href="#">Mostrar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuarios
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../usuario/menuusuarioinsertar.php">Insertar usuario</a></li>
                            <li><a class="dropdown-item" href="#">Mostrar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tipo noticia
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../tiponoticia/menutiponoticiainsertar.php">Insertar tipo noticia</a></li>
                            <li><a class="dropdown-item" href="#">Mostrar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tipo usuario
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../tipousuario/menutipousuarioinsertar.php">Insertar tipo usuario</a></li>
                            <li><a class="dropdown-item" href="#">Mostrar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reportes
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../reporte/noticiaporfecha.php">Noticias por fecha</a></li>
                            <li><a class="dropdown-item" href="../reporte/noticiasporusuario.php">Noticias por usuario</a></li>

                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <?php 
                    // echo 'usuario: '.$_SESSION['usuario_nombre']; 
                    ?>
                    <a clas="btn btn-danger btn-sm" href="logout.php">Cerrar session</a>
                    

                </div>
            </div>
        </nav>

<br>
    <form action="" id="form" class="container">

        <input type="hidden" id="id" name="id">
        <div class="row my-3">
            <div class="col-4">
                <select class="form-select" id="us" name="id_usuario">
                    <option value="">Selecciona una opción</option>
                </select>
            </div>
        </div>

        <input type="button" class="btn btn-primary" id="buscar" name="buscar" value="Buscar">

    <br><br><br>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Correo usuario</th>
                    <th>Tipo noticia</th>
                    <th>titulo</th>
                    <th>descipcion</th>
                </tr>
            </thead>
            <tbody id="lista">

            </tbody>
        </table>


        
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="porusuario.js"></script>
</body>
</html>
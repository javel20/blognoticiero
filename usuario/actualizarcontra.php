<?php

    // session_start();

    require('../conexion.php');
    header('Content-Type: application/json; charset=utf-8');
    $id_usuario = $_POST['id'];
    // $user = $_POST['user'];
    $pass = $_POST['pass'];
    $pass2 = $_POST['pass2'];

    // echo $id_usuario;

    $sql = "SELECT * FROM usuario WHERE id_usuario = $id_usuario";
    $query = mysqli_query($conexion,$sql);
    $data = mysqli_fetch_array($query);

    // print_r($data);

    $response["valid"] = 0;
    if(isset($data['contraseña'])){
        if (password_verify($pass, $data['contraseña'])){

            $hashed_password = password_hash($pass2, PASSWORD_BCRYPT);
            
            $sql = "UPDATE usuario SET contraseña='$hashed_password' WHERE id_usuario=$id_usuario";
            $query = mysqli_query($conexion,$sql);
            // echo $query;

            // Establecer variables de sesión
            // echo $data['id_usuario'] .'sess';
            // $_SESSION['id_usuario'] = $data['id_usuario'];  // Puedes almacenar cualquier información del usuario que desees
            // $_SESSION['usuario_nombre'] = $data['nombre_usuario'];
            // $_SESSION['correo'] = $data['correo'];
            $response["valid"]=1;
            
        }
    }

    $response['sql'] = $sql;
    
    echo json_encode($response);

?>
<?php

    session_start();

    require('conexion.php');
    // header('Content-Type: application/json; charset=utf-8');

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $sql = "SELECT * FROM usuario WHERE correo = '".$user."' ";
    $query = mysqli_query($conexion,$sql);
    $data = mysqli_fetch_array($query);

    // print_r($data);

    $response["valid"] = 0;
    if(isset($data['contraseña'])){
        if (password_verify($pass, $data['contraseña'])){
            // Establecer variables de sesión
            // echo $data['id_usuario'] .'sess';
            $_SESSION['id_usuario'] = $data['id_usuario'];  // Puedes almacenar cualquier información del usuario que desees
            $_SESSION['usuario_nombre'] = $data['nombre_usuario'];
            $_SESSION['correo'] = $data['correo'];
            $response["valid"]=1;
        }
    }

    $response['sql'] = $sql;
    
    echo json_encode($response);

?>
<?php

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
            $response["valid"]=1;
        }
    }

    $response['sql'] = $sql;
    
    echo json_encode($response);

?>
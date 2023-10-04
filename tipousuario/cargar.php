<?php

    include('../conexion.php');

    $id = $_POST['id'];

    $sql = "SELECT * FROM tipo_usuario WHERE id_tipo_usuario = $id";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_assoc($query);
    $json = json_encode($row);
    echo $json;


?>
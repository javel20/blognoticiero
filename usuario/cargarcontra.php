<?php

    include('../conexion.php');

    $id_usuario = $_POST['id'];

    $sql = "SELECT * FROM usuario WHERE id_usuario='$id_usuario'";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_assoc($query);
    $json = json_encode($row);
    // return;
    echo $json;

?>
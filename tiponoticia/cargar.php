<?php

    include('../conexion.php');

    $id_tipo_noticia = $_POST['id'];

    $sql = "SELECT * FROM tipo_noticia WHERE id_tipo_noticia='$id_tipo_noticia'";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_assoc($query);
    $json = json_encode($row);
    // return;
    echo $json;

?>
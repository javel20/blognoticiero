<?php

    include('../conexion.php');

    $id_noticia = $_POST['id'];

    $sql = "SELECT * FROM noticia WHERE id_noticia='$id_noticia'";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_assoc($query);
    $json = json_encode($row);
    // return;
    echo $json;

?>
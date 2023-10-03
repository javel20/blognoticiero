<?php

    require('../conexion.php');

    $sql = "SELECT * FROM tipo_noticia";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
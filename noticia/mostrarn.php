<?php

    require('../conexion.php');

    $sql = "SELECT * 
    FROM noticia
    INNER JOIN tipo_noticia on tipo_noticia.id_tipo_noticia=noticia.id_tipo_noticia 
    where noticia.estado_noticia='Activo'";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
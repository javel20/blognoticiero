<?php

    require('../conexion.php');

    $sql = "SELECT * 
    FROM noticia
    INNER JOIN tipo_noticia on tipo_noticia.id_tipo_noticia=noticia.id_tipo_noticia 
    INNER JOIN usuario on usuario.id_usuario = noticia.id_usuario
    where noticia.estado_noticia='Activo' 
    GROUP BY noticia.id_noticia ASC";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
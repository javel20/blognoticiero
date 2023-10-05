<?php

    require('../conexion.php');

    $fecha = $_POST['fecha'];

    $sql = "SELECT * 
            FROM noticia 
            INNER JOIN usuario ON noticia.id_usuario = usuario.id_usuario
            INNER JOIN tipo_noticia ON tipo_noticia.id_tipo_noticia = noticia.id_tipo_noticia 
            where noticia.estado_noticia='Activo' AND DATE_FORMAT(noticia.fecha,'%Y-%m-%d') = '$fecha'";

    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
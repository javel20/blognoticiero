<?php

    require('../conexion.php');

    $id = $_POST['id'];

    $sql = "SELECT * FROM usuario
    INNER JOIN noticia ON noticia.id_usuario=usuario.id_usuario
    WHERE estado_noticia='Activo' AND  usuario.id_usuario=$id";

    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
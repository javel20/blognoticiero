<?php

    include('../conexion.php');

    $id_tipo_noticia = $_POST['id_tipo_noticia'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $imagen = $_POST['imagen'];
    $fecha = $_POST['fecha'];
    

    $sql = "INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUES(6,'$id_tipo_noticia','$titulo','$descripcion','$imagen','$fecha','Activo')";
    $query = mysqli_query($conexion,$sql);
    echo $query;

?>
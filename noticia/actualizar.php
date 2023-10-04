<?php

require('../conexion.php');

    $id = $_POST['id'];
    $id_tipo_noticia = $_POST['id_tipo_noticia'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $imagen = $_POST['imagen'];
    $fecha = $_POST['fecha'];


    $sql = "UPDATE noticia SET id_tipo_noticia=$id_tipo_noticia, titulo='$titulo',descripcion='$descripcion',imagen='$imagen',fecha='$fecha' WHERE id_noticia=$id";
    $query = mysqli_query($conexion,$sql);

    if ($query) {
        echo json_encode(array('success' => true, 'message' => 'Actualización exitosa.'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Error al actualizar la base de datos.'));
    }
        echo $query;

?>
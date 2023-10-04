<?php

require('../conexion.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];

    $sql = "UPDATE tipo_noticia SET nombre_not='$nombre' WHERE id_tipo_noticia=$id";
    $query = mysqli_query($conexion,$sql);

    if ($query) {
        echo json_encode(array('success' => true, 'message' => 'Actualización exitosa.'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Error al actualizar la base de datos.'));
    }
        echo $query;

?>
<?php

require('../conexion.php');

    $id = $_POST['id'];
    $id_tipo_usuario = $_POST['id_tipo_usuario'];
    $nombre_usuario = $_POST['nombre_usuario'];
    $fecha = $_POST['fecha'];


    $sql = "UPDATE usuario SET id_tipo_usuario='$id_tipo_usuario', nombre_usuario='$nombre_usuario', fecha='$fecha' WHERE id_usuario=$id";
    $query = mysqli_query($conexion,$sql);

    if ($query) {
        echo json_encode(array('success' => true, 'message' => 'Actualización exitosa.'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Error al actualizar la base de datos.'));
    }
        echo $query;

?>
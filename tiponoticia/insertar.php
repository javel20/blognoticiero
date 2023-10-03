<?php

require('../conexion.php');

$nombre = $_POST['nombre'];

    $sql = "INSERT INTO tipo_noticia(nombre_not) VALUES('$nombre')";
    $query = mysqli_query($conexion,$sql);
    echo $query;

?>
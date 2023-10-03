<?php

require('../conexion.php');

$nombre = $_POST['nombre'];

    $sql = "INSERT INTO tipo_usuario(nombre_tipous) VALUES('$nombre')";
    $query = mysqli_query($conexion,$sql);
    echo $query;

?>
<?php

    require('../conexion.php');

    $sql = "SELECT * 
    FROM usuario
    INNER JOIN tipo_usuario on tipo_usuario.id_tipo_usuario=usuario.id_tipo_usuario
    ";
    $query = mysqli_query($conexion,$sql);
    $row = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json = json_encode($row);
    echo $json;

?>
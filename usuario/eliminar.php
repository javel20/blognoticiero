<?php

    include('../conexion.php');

    $id = $_POST['id'];
    $sql = "UPDATE usuario SET estado_usuario='Inactivo' WHERE id_usuario='$id'";
    mysqli_query($conexion,$sql);

    
?>
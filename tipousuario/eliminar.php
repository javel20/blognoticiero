<?php

    include('../conexion.php');

    $id = $_POST['id'];
    $sql = "UPDATE tipo_usuario SET estado_tipous='Inactivo' WHERE id_tipo_usuario='$id'";
    mysqli_query($conexion,$sql);

    
?>
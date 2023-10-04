<?php

    include('../conexion.php');

    $id = $_POST['id'];
    $sql = "UPDATE tipo_noticia SET estado_tiponot='Inactivo' WHERE id_tipo_noticia='$id'";
    mysqli_query($conexion,$sql);

    
?>
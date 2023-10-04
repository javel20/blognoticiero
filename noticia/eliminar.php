<?php

    include('../conexion.php');

    $id = $_POST['id'];
    $sql = "UPDATE noticia SET estado_noticia='Inactivo' WHERE id_noticia='$id'";
    mysqli_query($conexion,$sql);

    
?>
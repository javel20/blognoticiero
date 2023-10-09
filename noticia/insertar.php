<?php

$response = array();

$ruta = 'archivos/';
//printr()
// validar extension del archivo
if (($_FILES["imagen"]["type"] == "image/jpg")
|| ($_FILES["imagen"]["type"] == "image/jpeg")
|| ($_FILES["imagen"]["type"] == "image/png")
|| ($_FILES["imagen"]["type"] == "image/gif")){

    //ruta del archivo y guarda en la ubicacion deseada
    move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta.$_FILES['imagen']['name']);

    // $imagen = $ruta.$_FILES['imagen']['name'];
    if($_FILES["imagen"]["type"] !== ''){

        
    }
    // echo $imagen;

    require ('../conexion.php');
    
    $id_usuario = $_POST['id_usuario'];
    $id_tipo_noticia = $_POST['id_tipo_noticia'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    // $imagen = $_POST['imagen'];
    $fecha = $_POST['fecha'];
    

    $sql = "INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUES('$id_usuario','$id_tipo_noticia','$titulo','$descripcion','$imagen','$fecha','Activo')";
    $query = mysqli_query($conexion,$sql);
    $response['sql'] = $sql;

        $response['respuesta'] = 'ok';
        echo json_encode($response);



}
?>
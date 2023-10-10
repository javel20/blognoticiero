<?php

$response = array();

$ruta = 'archivos/';

require ('../conexion.php');
$id = $_POST['id'];
$id_usuario = $_POST['id_usuario'];
$id_tipo_noticia = $_POST['id_tipo_noticia'];
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];
// $imagen = $_POST['imagen'];
$fecha = $_POST['fecha'];

$sql_img = "SELECT imagen from noticia where id_noticia = $id";
$query_imagen = mysqli_query($conexion,$sql_img);
$row_img = mysqli_fetch_assoc($query_imagen);
$imagen = $row_img['imagen'];
echo $imagen;

echo '<pre>';
print_r($_FILES);
print_r($_REQUEST);
echo '</pre>';

if (($_FILES["imagen"]["type"] == "image/jpg")
|| ($_FILES["imagen"]["type"] == "image/jpeg")
|| ($_FILES["imagen"]["type"] == "image/png")
|| ($_FILES["imagen"]["type"] == "image/gif")){

    //ruta del archivo y guarda en la ubicacion deseada
    move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta.$_FILES['imagen']['name']);

    $imagen = $ruta.$_FILES['imagen']['name'];
    // echo $imagen;


    $sql = "UPDATE noticia SET id_tipo_noticia=$id_tipo_noticia, id_usuario='$id_usuario' ,titulo='$titulo',descripcion='$descripcion', imagen='$imagen',fecha='$fecha' WHERE id_noticia=$id";

}else{
    $sql = "UPDATE noticia SET id_tipo_noticia=$id_tipo_noticia, id_usuario='$id_usuario' ,titulo='$titulo',descripcion='$descripcion', imagen='$imagen',fecha='$fecha' WHERE id_noticia=$id";

}
$query = mysqli_query($conexion,$sql);

if ($query) {
    echo json_encode(array('success' => true, 'message' => 'Actualización exitosa.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Error al actualizar la base de datos.'));
}

?>
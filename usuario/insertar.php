<?php

require('../conexion.php');

$id_tipo_usuario = $_POST['id_tipo_usuario'];
$nombre_usuario = $_POST['nombre_usuario'];
$correo = $_POST['correo'];
$contraseña = $_POST['pass'];
$fecha = $_POST['fecha'];

$hashed_password = password_hash($contraseña, PASSWORD_BCRYPT);

$sql = "INSERT INTO usuario(id_tipo_usuario, nombre_usuario, correo, contraseña,fecha,estado_usuario) VALUES ($id_tipo_usuario,'$nombre_usuario','$correo', '$hashed_password','$fecha','Activo')";
$query = mysqli_query($conexion,$sql);
echo $query;

?>
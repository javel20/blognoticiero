<?php
session_start();
unset($_SESSION['usuario_nombre']);
session_destroy();
header('location:index.php');
?>
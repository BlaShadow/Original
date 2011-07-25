<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	if($_GET){
		$id_usuario = $_SESSION['usuario'];
		$nombre = $_GET['nombre'];
		$telefono1 = $_GET['telefono1'];
		$telefono2 = $_GET['telefono2'];
		$rnc = $_GET['rnc'];
		$email = $_GET['email'];
		$latitud = $_GET['latitud'];
		$longitud = $_GET['longitud'];
		$direccion = $_GET['direccion'];
		$zona = $_GET['zona'];
		$provincia = $_GET['provincia'];
		
		$query = "call registrarnegocio('".$id_usuario."','".$nombre."','".$telefono1."','".$telefono2."','".$rnc."',
		'".$email."','".$latitud."','".$longitud."','".$direccion."','".$zona."','".$provincia."',)";
		
		mysql_query($query);
		if(mysqli_affected_rows() > 0){
			echo "Good";
		}
		else{
			echo "Bad";
		}
	}
	
?>
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
		$foto = "temp";
		
		$query = "select id_peluqueria from peluqueria where id_usuario=".$id_usuario;
		$result = mysql_query($query);
		$row = mysql_fetch_array($result);
		
		if($row['id_peluqueria'] == ""){
		
			$query = "call registrarnegocio('".$id_usuario."','".$nombre."','".$telefono1."','".$telefono2."','".$rnc."',
			'".$email."','".$foto."','".$latitud."','".$longitud."','".$direccion."','".$zona."','".$provincia."')";
			
			mysql_query($query);
			if(mysql_affected_rows() > 0){
				echo "Registro";
			}
		}
		else{
		
			$query = "update peluqueria,ubicacion set peluqueria.id_usuario='".
			$id_usuario."', peluqueria.nombre = '".$nombre."', peluqueria.telefono1 ='".
			$telefono1."', peluqueria.telefono2='".$telefono2."', peluqueria.rnc=".$rnc.
			", peluqueria.email='".$email."', peluqueria.fotos='".$foto."', ubicacion.id_peluqueria=".
			$row['id_peluqueria'].", ubicacion.latitud=".$latitud.", ubicacion.longitud=".
			$longitud.", ubicacion.direccion='".$direccion."', ubicacion.zona='".$zona.
			"', ubicacion.provincia='".$provincia."' where peluqueria.id_peluqueria=".$row['id_peluqueria'];
			
			mysql_query($query);
			if(mysql_affected_rows() > 0){
			echo "Actualizo";
			}
		}
		
	}
	
?>
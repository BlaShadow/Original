<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	if($_GET){
		$cedula = $_GET["cedula"];
		$nombre = $_GET["nombre"];
		$apellido = $_GET["apellido"];
		$nombre_usuario = $_GET["nombre_usuario"];
		$contrasena = $_GET["contrasena"];
		$direccion = $_GET["direccion"];
		$telefono_local = $_GET["telefono_local"];
		$telefono_celular = $_GET["telefono_celular"];
		$sexo = $_GET["sexo"];
		$estado_civil = $_GET["estado_civil"];
		$email = $_GET["email"];
		$clase = 1;
		
		$query = "call registrarusuario('".$cedula."','".$nombre."','".$apellido."',
		'".$nombre_usuario."','".$contrasena."','".$direccion."','".$telefono_local."',
		'".$telefono_celular."','".$sexo."','".$estado_civil."','".$email."','".$clase."')";
		
		$result = mysql_query($query);
		if(mysql_affected_rows() > 0){
		
			echo "Good";
		}
		else{
			echo "Bad";
		}
		
	}
	
?>
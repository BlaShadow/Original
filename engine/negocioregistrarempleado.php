<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	if($_GET){
		$cedula = $_GET["cedula"];
		$nombre = $_GET["nombre"];
		$apellido = $_GET["apellido"];
		$direccion = $_GET["direccion"];
		$telefono_local = $_GET["telefono_local"];
		$telefono_celular = $_GET["telefono_celular"];
		$sexo = $_GET["sexo"];
		$estado_civil = $_GET["estado_civil"];
		$email = $_GET["email"];
		
		
		$query1 = "select id_peluqueria from peluqueria where id_usuario =".$_SESSION['usuario'];
		$result = mysql_query($query1);
		$row = mysql_fetch_assoc($result);
		
		$query = "call registrarempleado(".$row['id_peluqueria'].",'".$cedula."','".$nombre."','".$apellido."',
		'".$direccion."','".$telefono_local."','".$telefono_celular."','".$sexo."','".$estado_civil."','".$email."')";
		
		mysql_query($query);
		if(mysql_affected_rows() > 0){
		
			echo "Good";
		}
		else{
			echo "Bad";
		}
	}
	
?>
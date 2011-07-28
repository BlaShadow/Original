<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	if($_GET){
		$servicio = $_GET['servicio'];
		$costo = $_GET['costo'];
		
		$query1 = "select id_peluqueria from peluqueria where id_usuario=".$_SESSION['usuario'];
		$result = mysql_query($query1);
		$row = mysql_fetch_assoc($result);
		
		$query = "call registrarservicios(".$row['id_peluqueria'].",'".$servicio."','".$costo."')";
		mysql_query($query);
		
		if(mysql_affected_rows() > 0){
		
			echo "Good";
		}
		else{
			echo "Bad";
		}
	
	}
?>
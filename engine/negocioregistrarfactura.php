<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	if($_GET){
		$cliente = $_GET['cliente'];
		$servicio = $_GET['servicio'];
		$costo = $_GET['costo'];
		$descuento = $_GET['descuento'];
		$itbis = $_GET['itbis'];
		$total = $_GET['total'];
		
		$query = "call registrarfactura('".$_SESSION['usuario']."','".$cliente."','".$servicio."',".$costo.",".$descuento.",".$itbis.",".$total.",CURDATE())";
		mysql_query($query);
		if(mysql_affected_rows() > 0){
			echo "Good";
		}
		else{
			echo "Bad";
		}
		
	}
?>
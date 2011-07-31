<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	if($_GET){
	
		$id_factura = $_GET['id_factura'];
		$comentario = $_GET['comentario'];
		
		$query = "update factura set vigencia = 'N',comentario = '".$comentario."' where id_factura = ".$id_factura;
		mysql_query($query);
		if(mysql_affected_rows() > 0){
			echo "Good";
		}
		else{
			echo "Bad";
		}
	}
?> 
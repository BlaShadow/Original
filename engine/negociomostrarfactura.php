<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	// Query que me retorna el id_peluqueria para buscar las facturas.
	$query1 = "select id_peluqueria from peluqueria where id_usuario=".$_SESSION["usuario"];
	$result1 = mysql_query($query1);
	$row1 = mysql_fetch_array($result1);
	
	$query2 = "select * from factura where id_peluqueria=".$row1['id_peluqueria']." and vigencia = 'A'";
	$result2 = mysql_query($query2);
	
	echo "<?xml version='1.0' encoding='UTF-8' ?>";
	echo "<datos>";
	echo "<datosfacturas>";
	while($row2 = mysql_fetch_array($result2)){
		$query3 = "select nombre,apellido from datos_personales where cedula=".$row2['id_cliente'];
		$result3 = mysql_query($query3);
		$row3 = mysql_fetch_array($result3);
		echo "<factura>";
		echo "<id_factura>".$row2['id_factura']."</id_factura>";
		echo "<cliente>".$row3['nombre']." ".$row3['apellido']."</cliente>";
		echo "<servicio>".$row2['servicio']."</servicio>";
		echo "<costo>".round($row2['costo'],2)."</costo>";
		echo "<descuento>".round($row2['descuento'],2)."</descuento>";
		echo "<itbis>".round($row2['itbis'],2)."</itbis>";
		echo "<total>".round($row2['total'],2)."</total>";
		echo "<fecha>".$row2['fecha']."</fecha>";
		echo "</factura>";
	}
	echo "</datosfacturas>";
	echo "</datos>";
	header("Content-type: text/xml");

?>
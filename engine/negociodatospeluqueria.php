<?php
	session_start();
	include_once("conexion.php");
	include_once("validarLetras.php");
	$conexion = new Conexion;
	
	$query1 = "select * from peluqueria ,ubicacion where peluqueria.id_usuario =".$_SESSION["usuario"];
	$result1 = mysql_query($query1);
	
	echo "<?xml version='1.0' encoding='UTF-8' ?>";
	echo "<datos>";
	echo "<datospeluqueria>";
	
	while($row = mysql_fetch_array($result1)){
		echo "<peluqueria>";
		echo "<nombre>".parseToXML($row['nombre'])."</nombre>";
		echo "<telefono1>".$row['telefono1']."</telefono1>";
		echo "<telefono2>".$row['telefono2']."</telefono2>";
		echo "<latitud>".$row['latitud']."</latitud>";
		echo "<longitud>".$row['longitud']."</longitud>";
		echo "<direccion>".parseToXML($row['direccion'])."</direccion>";
		echo "<zona>".parseToXML($row['zona'])."</zona>";
		echo "<provincia>".parseToXML($row['provincia'])."</provincia>";
		echo "<rnc>".$row['rnc']."</rnc>";
		echo "<email>".$row['email']."</email>";
		echo "</peluqueria>";
	}
	echo "</datospeluqueria>";
	echo "</datos>";
	header("Content-type: text/xml");

?>
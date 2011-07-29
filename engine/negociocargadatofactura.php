<?php
	session_start();
	include_once("conexion.php");
	include_once("validarLetras.php");
	$conexion = new Conexion;
	
	// funcion en caso de que se usen caracter raritos.
	
	// Query que me retorna el id_peluqueria para buscar los clientes.
	$query1 = "select id_peluqueria from peluqueria where id_usuario=".$_SESSION["usuario"];
	$result1 = mysql_query($query1);
	$row1 = mysql_fetch_array($result);
	
	// Query que me retorna todos los clientes que sean de la peluqueria con ese id.
	$query2 = "select id_cliente from clientes where id_peluqueria=".$row1['id_peluqueria'];
	$result2 = mysql_query($query2);
	
	// Start XML file, echo parent node
	echo "<?xml version='1.0' encoding='UTF-8' ?>";
	echo "<datos>";
	echo "<datospersonales>";
	
	while ($row = mysql_fetch_array($result2)){
		
		$query = "select distinct nombre, apellido from
		datos_personales where cedula=".$row['id_cliente'];
		
		$result3 = mysql_query($query);
		$row2 = mysql_fetch_assoc($result3);
		echo "<persona>";		
		echo "<nombre>".parseToXML($row2['nombre'])."</nombre>";
		echo "<apellido>".parseToXML($row2['apellido'])."</apellido>";
		echo "</persona>";
	}
	// End XML file
	echo ' </datospersonales>';
	echo "<datoservicio>";
	while($row = mysql_fetch_array($result)){
		$query = "select distinct servicio,precio from servicios
		where id_peluqueria "$row1['id_peluqueria'];
	
	
	}
	echo "</datoservicio>";
	echo "</datos>";
	
	header("Content-type: text/xml");
	
?>
	

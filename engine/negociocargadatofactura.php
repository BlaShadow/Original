	<?php
	session_start();
	include_once("conexion.php");
	$conexion = new Conexion;
	
	// funcion en caso de que se usen caracter raritos.
	function parseToXML($htmlStr) 
	{ 
		$xmlStr=str_replace('<','&lt;',$htmlStr); 
		$xmlStr=str_replace('>','&gt;',$xmlStr); 
		$xmlStr=str_replace('"','&quot;',$xmlStr); 
		$xmlStr=str_replace("'",'&#39;',$xmlStr); 
		$xmlStr=str_replace("&",'&amp;',$xmlStr); 
		$xmlStr=str_replace("ñ",'&#241;',$xmlStr);
		$xmlStr=str_replace("Ñ",'&Ntilde;',$xmlStr);
		$xmlStr=str_replace("á",'&#225;',$xmlStr);
		$xmlStr=str_replace("é",'&#233;',$xmlStr);
		$xmlStr=str_replace("í",'&#237;',$xmlStr);
		$xmlStr=str_replace("ó",'&#243;',$xmlStr);
		$xmlStr=str_replace("ú",'&#250;',$xmlStr);
		$xmlStr=str_replace("Á",'&#193;',$xmlStr);
		$xmlStr=str_replace("É",'&Eacute;',$xmlStr);
		$xmlStr=str_replace("Í",'&Iacute;',$xmlStr);
		$xmlStr=str_replace("Ó",'&Oacute;',$xmlStr);
		$xmlStr=str_replace("Ú",'&Uacute;',$xmlStr);
		return $xmlStr; 
	} 
	// Query que me retorna el id_peluqueria para buscar los clientes.
	$query = "select id_peluqueria from peluqueria where id_usuario=".$_SESSION["usuario"];
	$result = mysql_query($query);
	$row = mysql_fetch_array($result);
	
	// Query que me retorna todos los clientes que sean de la peluqueria con ese id.
	$query = "select id_cliente from clientes where id_peluqueria=".$row['id_peluqueria'];
	$result = mysql_query($query);
	
	// Start XML file, echo parent node
	

	echo "<raiz>";
	echo '<datospersonales>';
	
	while ($row = mysql_fetch_array($result)){
		
		$query = "select distinct nombre, apellido from
		datos_personales where cedula=".$row['id_cliente'];
		
		$result3 = mysql_query($query);
		$row2 = mysql_fetch_assoc($result3);
		
		echo '<persona>';
		echo '<nombre>'.parseToXML($row2['nombre']).'</nombre>';
		echo '<apellido>'.parseToXML($row2['apellido']).'</apellido>';
		echo '</persona>';
	}
	// End XML file
	echo ' </datospersonales>';
	echo "</raiz>";
	header("Content-type: text/xml");
	
	
	
?>
	

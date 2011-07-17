<?php

require_once("engine/libreria.php");

function parseToXML($htmlStr) 
{ 
$xmlStr=str_replace('<','&lt;',$htmlStr); 
$xmlStr=str_replace('>','&gt;',$xmlStr); 
$xmlStr=str_replace('"','&quot;',$xmlStr); 
$xmlStr=str_replace("'",'&#39;',$xmlStr); 
$xmlStr=str_replace("&",'&amp;',$xmlStr); 
return $xmlStr; 
} 

$link=mysql_connect("localhost", "root", "");
if(!$link){
	die('No se conecto:'.mysql_error());
}

$db_selected=mysql_select_db("peluqueria", $link);
if(!$db_selected){
	die('no se hizo nada:'.mysql_error());
}

$sql="SELECT * FROM ubicaciones WHERE 1";
$result=mysql_query($sql);
if(!$result)
{
	die('Ha ocurrido un error:'.mysql_error());
}
echo "<?xml version='1.0' encoding='iso-8859-1'?>";
echo "<barberias>";

while($row=mysql_fetch_assoc($result))
{
			echo"<barberia ";
			echo "ID = '".$row["ID"]."' ";
			echo "usuario = '".$row["Usuario"]."' ";
			echo "clave = '".$row["Clave"]."' ";
			echo "negocio = '".$row["Nombre_Negocio"]."' ";
			echo "direccion = '".$row["Direccion"]."' ";
			echo "email = '".$row["Email"]."' ";
			echo "Latitud = '".$row["Lat"]."' ";
			echo "Longitud = '".$row["Lng"]."' ";
			echo "rnc = '".$row["RNC"]."' ";
			echo "telefono = '".$row["Tel"]."' ";
			echo "url = '".$row["URL"]."' ";
			echo "/>";

}			
echo "</barberias>";	

header("Content-Type: text/xml");

?>




<?php
	//incluir la libreria de archivos 
	require_once("libreria.php");

	//Instancio mi conexion
	$conexion=new Conexion;
	
	//Querry que me retornara todos los registrso(posts)
	//$sql="select * from news limit ".$_GET["start"].",".$_GET["end"]."";
	$sql="select * from news order by id desc";

	//Convierto mi query en una array
	$query=mysql_query($sql);
	
	//tdt de mi documento xml
	echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
	
	//Elemento padre
	echo "<posts>";
	
		//$ara=mysql_fetch_array($query);
		
		while($ara=mysql_fetch_array($query)){
		
			echo "<item>";
				
				echo "<id>";
					echo $ara[0]." ";
				echo "</id>";
			
				echo "<titulo>";
					echo $ara[1]." ";
				echo "</titulo>";
				
				echo "<detalle>";
					echo $ara[2]." ";
				echo "</detalle>";
				
				echo "<posteador>";
					echo $ara[3]." ";
				echo "</posteador>";
				
				echo "<photos>";
					echo $ara[4]." ";
				echo "</photos>";
					
				echo "<fecha>";
					echo $ara[5]." ";
				echo "</fecha>";
					
			echo "</item>";
		
		}
	echo "</posts>";
	
	//Header del documento
	header("Content-Type: text/xml");

?>
<?php
	
	require_once("libreria.php");
	
	$conecion=new conexion;
	
	$sql="select * from usuario where nombre_usuario='".$_GET["nick"]."'  and contrasena='".$_GET["pass"]."'";
	
	$query=mysql_query($sql);
	
	if(mysql_affected_rows()==1){
	
		echo "ok";
	
	}
	else{
	
		echo "fail";
	
	}
	
?>
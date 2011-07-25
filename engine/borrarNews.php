<?php
	
	session_start();
	require_once("libreria.php");
	
	$conexion=new conexion;
	
	$sql="delete from news where id='".$_GET["id"]."'";
	
	$query=mysql_query($sql);
	
	if(mysql_affected_rows()==1){
	
		echo "ok";
	
	}else{
	
		echo "fail";
	
	}
	
?>
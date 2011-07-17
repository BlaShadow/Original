<?php
	
	session_start();
	require_once("libreria.php");
	
	$conexion=new conexion;
	
	$sql="delete from news where id='".$_GET["id"]."'";
	
	$query=mysql_query($sql);
	
	if(mysql_affected_rows()==1){
	
		echo "<script>alert('Noticia Borrada');window.location='../index.php';</script>";
	
	}else{
	
		echo "<script>alert('Error');window.location='../index.php';</script>";
	
	}
	
?>
<?php

	session_start();

	require_once("libreria.php");

	$conexion=new Conexion;
	
	$sql="insert into news(titulo,detalles,posteador,photos,fecha) values('".$_POST["titulo"]."','".$_POST["detalles"]."','".$_SESSION["master"]."','".$_POST["photo"]."',curdate()) ";
	
	$query=mysql_query($sql);
	
	if(mysql_affected_rows()==1){
	
		echo "<script>alert('Tema Creado'); window.location='../index.php';</script>";
	
	}else{
	
		echo "<script>alert('Error'); window.location='../index.php';</script>";
	
	}
	
?>
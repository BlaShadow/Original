<?php

	require_once("libreria.php");
	
	$conexio=new Conexion;
	
	$sql="insert into comentarios(id_post,id_usuario,comentario) values('".$_GET["post"]."','".$_GET["usuario"]."','".$_GET["comentario"]."')";

	$query=mysql_query($sql);
	
	if(mysql_affected_rows()>0){
	
		echo 1;
	
	}
	
?>
<?php
	include_once("conexion.php");
	$conexion = new Conexion;
	class usuarios
	{
		var $autorizado = false;
		
		function __construct($usuario,$pass)
		{	
			$query = "SELECT * FROM usuario";
			$result = mysql_query($query);
			$row = mysql_fetch_assoc($result);
			if($usuario == $row["nombre_usuario"]  && $pass == $row["contrasena"])
			{
				$this->autorizado = true;
			}
		}
	}
?>
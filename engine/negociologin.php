<?php
	session_start();
	include_once("negocioconfirmarusuario.php");
	if($_GET)
	{
		
		$usuario = $_GET["usuario"];
		$pass = $_GET["password"];
		$usuarios = new usuarios($usuario,$pass);
	
		if($usuarios->autorizado)
		{
			$_SESSION["userLogin"] = serialize($usuarios);
			echo "autentificado";
		
		}
		else
		{
			echo "no autentificado";
			
		}
	}
?>

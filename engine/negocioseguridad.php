<?php
	include("negocioconfirmarusuario.php");
	
	if(isset($_SESSION["userLogin"]) && unserialize($_SESSION["userLogin"])->autorizado == true)
	{
	
	
	}
	else
	{
		header("Location: ../Original/negocio.php");
	}
?>
<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>
<head>

	<title>Peluquerias</title>
	<script src="js/Ajax_ObjetoHTTP.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
	
</head>

<body onload="newsHome()">

	<div id="page">
		
		<div id="header">
		
			
		
		</div>
		
		<div id="menu">
		
				<a href="index.php"><div class="item">Inicio</div></a>
				<a href="mapa.php"><div class="item">Mapa</div></a>
				<a href="negocio.php"><div class="item">Negocio</div></a>
		
		<div style="clear:both"></div>
		
		</div>
		
		<div id="body">
		
			<div id="postsCuerpo"></div>
			<div id="loginMaster" align="center">
			
				<form>
				
					<input type="text"><br>
					<input type="text"><br>
					<button>Iniciar</button>
				
				</form>
			
			</div>
		<div style="clear:both"></div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>
</html>
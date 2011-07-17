<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	<script src="js/AJax_ObjetoHTTP.js"></script>
	<link rel="stylesheet" type="text/css" href="css/newsStyle.css" media="screen">
	
</head>

<body>

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
		
			<div id="panel" align="center">
			
				<form action="engine/crearNoticias.php" method="post" onsubmit="return validarNews()" name="noticias">
				
				Titulo:<br>
					<input type="text" name="titulo"><br>
				Detalles:<br>
					<textarea name="detalles"></textarea><br>
				Photo:<br>
					<input type="file" name="photo"><br>
				
				<button onclick="">Crear</button>
				
				</form>
			
			</div>
			
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
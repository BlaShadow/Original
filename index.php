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

<body onload="newsHome(0,10)">

	<div id="page">
		
		<div id="header">
		
			<font face="Comic Sans MS" size="20">
			esto es una letra jevi verdad
		</font>
		
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
				
					<form onsubmit="return false" name="loginForm">
					
					Nombre:<br>
					
						<input type="text" name="nick"><br>
						
					Clave:<br>
					
						<input type="text" name="pass"><br>
						
						<button onclick="login(document.loginForm.nick.value,document.loginForm.pass.value)">Iniciar</button>
					
					</form>
				
				</div>
				
		<div style="clear:both" id="paginador"></div>
		<div style="clear:both"></div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>
</html>
<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
	<script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAjU0EJWnWPMv7oQ-jjS7dYxTPZYElJSBeBUeMSX5xXgq6lLjHthSAk20WnZ_iuuzhMt60X_ukms-AUg"
            ></script>
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
	
	<script type="text/javascript"	src="map.js"></script>
	
</head>

<body onload="inicio()" >

	<div id="page">
		
		<div id="header">
		
			
		
		</div>
		
		<div id="menu">
		
				<a href="index.php"><div class="item">Inicio</div></a>
				<a href="mapa.php"><div class="item">Mapa</div></a>
				<a href="negocio.php"><div class="item">Negocio</div></a>
		
		<div style="clear:both"></div>
		
		</div>
		
		<div id="body" onload="alert(google.maps.Map.prototype.getCenter)">
		
			
			
		</div>
		
<<<<<<< HEAD
		
		
		<div id="footer"></div>
=======
		<div id="footer">
		
		<div id="lat" style="color:white"></div>
		<div id="lon" style="color:white"></div>
		
		</div>
>>>>>>> 7c82758f9a11b878bd0e73ec8a54adacc4a0e0d8
		
		<div id="coor">
		
		<span id="cod"></span>
		
		</div>
		
		
	</div>
	
	</body>

</html>

<?php

	session_start();
	require_once("engine/libreria.php");
	
	if(!$_GET["id"]){
	
		header("location:index.php");
	
	}

?>
<html>

<head>

	<title>Peluquerias</title>
	
	<link rel="stylesheet" type="text/css" href="css/newsdetails.css" media="screen">
	
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
		
			<div id="postDetalle">
			
				<?php
				
					$conexion=new conexion;
					
					$sql="select * from news where id='".$_GET["id"]."'";
					
					$query=mysql_query($sql);
					
					$ara=mysql_fetch_array($query);
					
					echo "<div class='post'>";
					echo "<p>".$ara["id"]."</p>";
					echo "<p>".$ara["titulo"]."</p>";
					echo "<p>".$ara["detalles"]."</p>";
					echo "<p>".$ara["photos"]."</p>";
					echo "<p>".$ara["fecha"]."</p>";
					echo "</div>";
				
				?>
			
				</div>
				
			<div class="comentarios">
			
			<?php
				for($i=0;$i<3;$i++){
				
					echo "<div class='comentario'></div>";
				
				}
			?>
			
			</div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
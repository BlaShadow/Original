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
	<script type="text/javascript" src="js/Ajax_ObjetoHTTP.js"></script>
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
					echo "<p>".ucfirst($ara["titulo"])."</p>";
					echo "<p>".ucfirst($ara["detalles"])."</p>";
					echo "<p>".$ara["photos"]."</p>";
					echo "<p>".$ara["fecha"]."</p>";
					echo "</div>";
				
				?>
			
				</div>
				
			<div class="comentarios" id="comentarios">
			
				<div id="comentariosPadre">
				
					<?php
					
						$conexion=new conexion;
						
						$sql="select * from comentarios where id_post='".$_GET["id"]."'";
						
						$query=mysql_query($sql);
						
						while($ara=mysql_fetch_array($query)){
						
							echo "<div class='comentario'>";
							echo $ara[2]."<br>";
							echo $ara[3];
							echo "</div>";
						
						}
					
					?>
				</div>
			
					<div id="insertarComentario" align="center" >
					
						<form action="#" method="POST" onsubmit="return false" name="formulario">
						
							Nombre:<br>
							
								<input type="text" maxlength="50" name="usuario"><br>
								
							Comentario:<br>
							
								<textarea maxlength="700" id="comentario"></textarea><br>
								<input id="id_post" type="hidden" value="<?php echo $_GET["id"]; ?>">
								
								<button onclick="addComent(document.getElementById('id_post').value,document.formulario.usuario.value,document.getElementById('comentario').value)">Comentar</button>
								
						</form>
					
					</div>
					
			</div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
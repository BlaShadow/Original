<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>
<head>

	<title>Peluquerias</title>
	<script src="js/Ajax_ObjetoHTTP.js" type="text/javascript"></script>
	<script src="js/jquery-1.6.2.min.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
	
</head>

<body onload="newsHome(0,10)">

	<div id="page">
		
		<div id="header">
		
			<font face="Comic Sans MS" size="20">
			<?php echo $_GET["nombre"];?>		</font>
		
		</div>
		
		<div id="menu">
		
				<a href="index.php"><div class="item">Inicio</div></a>
				<a href="mapa.php"><div class="item">Mapa</div></a>
				<a href="negocio.php"><div class="item">Negocio</div></a>
		
		<div style="clear:both"></div>
		
		</div>
		
		<div id="body">
		
			<div id="postsCuerpo"></div>
			
			<?php 
			
				if(@!$_SESSION["master"]){ 
				
					echo "<style> #loginMaster{ display:block; }#masterLog{ display:none; } </style>"; 
					
				}else{
					
					echo "<style> #loginMaster{ display:none; }#masterLog{ display:block; } </style>";
					
				}
			
			?>
				<div id="loginMaster" align="center">
				
					<form onsubmit="return false" name="loginForm">
					
					Nombre:<br>
					
						<input type="text" name="nick"><br>
						
					Clave:<br>
					
						<input type="password" name="pass"><br>
						
						<button onclick="login(document.loginForm.nick.value,document.loginForm.pass.value)">Iniciar</button>
					
					</form>
				
				</div>
				
				<input type="hidden" value="<?php if(@$_SESSION["master"]){ echo "true"; }else{ echo "false"; }?>" id="session">
				
				<div id="masterLog">
				
				<a href="engine/logout.php">Logout</a>
				<a href="news.php">Nueva Noticia</a>
				
				
				</div>
				
				
		<div style="clear:both" id="paginador"></div>
		<div style="clear:both"></div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>
</html>
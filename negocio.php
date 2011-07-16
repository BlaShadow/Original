<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	
	<link rel="stylesheet" type="text/css" href="css/styleNegocio.css" media="screen">
	<script type = 'text/javascript' src = 'js/SingIn.js'></script>
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
		
		<div id="bodyNegocio">
		
			<div id="login" align="center">
			
			<form>
			
				User:<br>
				<input type="text">
				Password:<br>
				<input type="text">
				
				<input type="submit" value="Login">
			
			</form>
			
			</div>
			
			<div id="singIn" align="center">
			
				<form onsubmit = 'return validacion();'>
						<label id = 'labelSingIn'> Registra </label></br></br>
					Cedula: </br>
					<input type="text" id = 'txtCedula' name = 'txtCedula'></br>
					Nombre: </br>
					<input type="text" id = 'txtNombre' name = 'txtNombre'></br>
					Apellido: </br>
					<input type="text" id = 'txtApellido' name = 'txtApellido'></br>
					Nombre de Usuario: </br>
					<input type = 'text' id = 'txtNombreUsuario' name = 'txtNombreUsuario'></br>
					Password: </br>
					<input type = 'password' id = 'txtPassword' name = 'txtPassword'></br>
					Direccion: </br>
					<input type="text" id = 'txtDireccion' name = 'txtDireccion'></br>
					Telefono Local: </br>
					<input type="text" id = 'txtTelefonoLocal' name = 'txtTelefonoLocal'></br>
					Telefono Celular: </br>
					<input type="text" id = 'txtTelefonoCelular' name = 'txtTelefonoCelular'></br>
					Sexo: </br>
					<input type="text" id = 'txtSexo' name = 'txtSexo'></br>
					Estado Civil: </br>
					<input type="text" id = 'txtEstadoCivil' name = 'txtEstadoCivil'></br>
					Email: </br>
					<input type="text" id = 'txtEmail' name = 'txtEmail'></br>
					
					<input type = 'submit' value = 'registrar'>
				
				</form>
			
			</div>
		
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
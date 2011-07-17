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

<body onload = 'load();'>

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
				
			<form method = 'POST' onsubmit = 'return validacionLogin();'>
			
				User:<br>
				<input type="text" id = 'user' name = 'user'>
				Password:<br>
				<input type="password" id = 'password' name = 'password'>
				
				<input type="submit" value="Login">
			
			</form>
			
			</div>
			
			<div id="singIn" align="center">
			
				<form method = 'POST' onsubmit = 'return validacionSingIn();'>
					<label id = 'labelSingIn'> Registrate </label></br></br>
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
					<select id = 'txtSexo'>
						<option value = ''></option>
						<option value = 'masculino'> Masculino </option>
						<option value = 'femenino'> Femenino </option>
						<option value = 'gay'> Gay </option>
						<option value = 'lesbiana'> Lesbiana </option>
					</select></br>
					Estado Civil: </br>
					<select id = 'txtEstadoCivil'>
						<option value = ''></option>
						<option value = 'Soltero'> Soltero </option>
						<option value = 'Casado'> Casado </option>
					</select></br>
					Email: </br>
					<input type="text" id = 'txtEmail' name = 'txtEmail'></br></br>
					
					<input type = 'submit' value = 'registrar'>
				
				</form>
			
			</div>
			
			<div id = "SignUpNegocio" align = "center"> 
				<form method = 'POST' onsubmit = 'return validacionSignUpNegocio();'>		
					<label> Registro de Negocio </label></br></br></br>
					Nombre Local: </br>
					<input type = 'text' id = 'nombre' name = 'nombre' ></br>
					Telefono 1: </br>
					<input type = 'text' id = 'telefono1' name = 'telefono1' ></br>
					Telefono 2:</br>
					<input type = 'text' id = 'telefono2' name = 'telefono2' ></br>
					RNC: </br>
					<input type = 'text' id = 'rnc' name = 'rnc' ></br>
					Email: </br>
					<input type = 'text' id = 'email' name = 'email' ></br>
					Latitud: </br>
					<input type = 'text' id = 'latitud' name = 'latitud' ></br>
					Longitud: </br>
					<input type = 'text' id = 'longitud' name = 'longitud' ></br>
					Direccion: </br>
					<input type = 'text' id = 'direccion' name = 'direccion' ></br>
					Zona: </br>
					<input type = 'text' id = 'zona' name = 'zona' ></br>
					Provincia: </br>
					<input type = 'text' id = 'provincia' name = 'provincia' ></br></br>
				
					<input type = 'submit' value = 'Registrar'> 
				</form>
			</div>
			<div id = 'SignUpClientes' align = 'center'>
				<form method = 'POST' onsubmit = 'return validacionSignUpClientes();'>
					<label id = 'labelSingIn'> Registrar Cliente </label></br></br>
					Cedula: </br>
					<input type="text" id = 'txtCedula' name = 'txtCedula'></br>
					Nombre: </br>
					<input type="text" id = 'txtNombre' name = 'txtNombre'></br>
					Apellido: </br>
					<input type="text" id = 'txtApellido' name = 'txtApellido'></br>
					Direccion: </br>
					<input type="text" id = 'txtDireccion' name = 'txtDireccion'></br>
					Telefono Local: </br>
					<input type="text" id = 'txtTelefonoLocal' name = 'txtTelefonoLocal'></br>
					Telefono Celular: </br>
					<input type="text" id = 'txtTelefonoCelular' name = 'txtTelefonoCelular'></br>
					Sexo: </br>
					<select id = 'txtSexo'>
						<option value = ''></option>
						<option value = 'masculino'> Masculino </option>
						<option value = 'femenino'> Femenino </option>
						<option value = 'gay'> Gay </option>
						<option value = 'lesbiana'> Lesbiana </option>
					</select></br>
					Estado Civil: </br>
					<select id = 'txtEstadoCivil'>
						<option value = ''></option>
						<option value = 'Soltero'> Soltero </option>
						<option value = 'Casado'> Casado </option>
					</select></br>
					Email: </br>
					<input type="text" id = 'txtEmail' name = 'txtEmail'></br></br>
					
					<input type = 'submit' value = 'registrar'>
				</form>
			</div>
			<div id = 'SignUpEmpleados' align = 'center'> 
				<form method = 'POST'>
				
				</form>
			</div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
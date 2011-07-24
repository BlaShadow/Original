<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	<link rel="stylesheet" type="text/css" href="css/template.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/styleNegocio.css" media="screen">
	<script src="js/jquery-1.6.2.min.js" type="text/javascript"></script>
	
	<script type = 'text/javascript' src = 'js/AJax_ObjetoHTTP.js'></script>
	<script type = 'text/javascript' src = 'js/negocio.js'></script>
</head>

<body onload = 'loadNegocio();'>

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
			<div id = 'bodyNegocio'>
				
				<div id="login" align="center">
					
					<form method = 'POST' onsubmit = 'return false'>
					
						User:<br>
						<input type="text" id = 'user' name = 'user'>
						Password:<br>
						<input type="password" id = 'password' name = 'password'>
						
						<button  onclick = 'loguear();'>Logear</button>
						<a href="#" onclick = 'registrarse();'><div class="login">Registrar</div></a>
						<div id = 'Mensaje' ></div>
					</form>
				</div>

				<div id="singIn" align="center">
				
					<form>
						<label id = 'labelSingIn'> Registrate </label></br></br>
						<table>
							<tr>
								<th>Cedula: </th>
								<td><input type="text" id = 'txtCedula' name = 'txtCedula'></td>
								<th>Nombre: </th>
								<td><input type="text" id = 'txtNombre' name = 'txtNombre'></td>
							</tr>
							<tr>
								<th>Apellido: </th>
								<td><input type="text" id = 'txtApellido' name = 'txtApellido'></td>
								<th>Nombre de Usuario: </th>
								<td><input type = 'text' id = 'txtNombreUsuario' name = 'txtNombreUsuario'></td>
							</tr>
							<tr>
								<th>Password: </th>
								<td><input type = 'password' id = 'txtPassword' name = 'txtPassword'></td>
								<th>Direccion: </th>
								<td><input type="text" id = 'txtDireccion' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<th>Telefono Local: </th>
								<td><input type="text" id = 'txtTelefonoLocal' name = 'txtTelefonoLocal'></td>
								<th>Telefono Celular: </th>
								<td><input type="text" id = 'txtTelefonoCelular' name = 'txtTelefonoCelular'></td>
							</tr>
							<tr>
								<th>Sexo: </th>
								<td><select id = 'txtSexo'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
								<th>Estado Civil: </th>
								<td><select id = 'txtEstadoCivil'>
									<option value = ''></option>
									<option value = 'Soltero'> Soltero </option>
									<option value = 'Casado'> Casado </option>
								</select></td>
							</tr>
							<tr>
								<th>Email: </th>
								<td><input type="text" id = 'txtEmail' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'> <button style = 'width:200px;'> Registrar </button></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><a href="#" onclick = 'registrarse();'><div class="login">Back to Login</div></a>
							</tr>
							
						</table>
					</form>
					
				</div>
			</div>
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
<?php

	session_start();
	require_once("engine/libreria.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	<link rel="stylesheet" type="text/css" href="css/template.css" media="screen">
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
		
		<div id="body">
			<div id = "bodyNegocio">
				
				<div id = 'buttons' >
				
					<a href = '#' onclick = 'agregarNegocio();'><div class = 'botones' > Suscribir mi Negocio</div></a>
					<a href = '#' onclick = 'agregarEmpleado();'><div class = 'botones' > Agregar Empleado</div></a>
					<a href = '#' onclick = 'agregarCliente();'><div class = 'botones' > Agregar Cliente</div></a>
					
				</div>
				
				<div id = "SignUpNegocio" align = "center"> 
					<form method = 'POST' onsubmit = 'return validacionSignUpNegocio();'>		
						<label> Registro de Negocio </label></br></br></br>
						<table>
							<tr>
								<th>Nombre Local: </th>
								<td> <input type = 'text' id = 'nombre' name = 'nombre' > </td>
								<th> RNC: </th>
								<td> <input type = 'text' id = 'rnc' name = 'rnc' > </td>
							</tr>			
							<tr>		
								<th> Telefono 1:</th>
								<td> <input type = 'text' id = 'telefono1' name = 'telefono1' > </td>
								<th> Telefono 2:</th>
								<td> <input type = 'text' id = 'telefono2' name = 'telefono2' > </td>
							</tr>
							<tr>
								<th>Email: </th>
								<td> <input type = 'text' id = 'email' name = 'email' > </td>
								<th>Direccion:</th> 
								<td><input type = 'text' id = 'direccion' name = 'direccion' ></td>
							</tr>
							
							<tr>
								<th>Longitud:</th> 
								<td><input type = 'text' id = 'longitud' name = 'longitud' ></td>
								<th>Latitud:</th> 
								<td> <input type = 'text' id = 'latitud' name = 'latitud' > </td>
							</tr>
							<tr>
								<th>Zona:</th> 
								<td><input type = 'text' id = 'zona' name = 'zona' ></td>
								<th>Provincia:</th>
								<td><input type = 'text' id = 'provincia' name = 'provincia' ></td>
							</tr>
							<tr>
								
								<td colspan = '4' align='center'><button> Registrar </button></td>
								
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpClientes' align = 'center'>
					<form method = 'POST' onsubmit = 'return validacionSignUpClientes();'>
						<label > Registrar Cliente </label></br></br>
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
					<form method = 'POST' onsubmit = 'return validacionSignUpClientes();'>
						<label> Registrar Empleado </label></br></br>
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
			</div>
			
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
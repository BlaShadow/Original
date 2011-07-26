<?php

	session_start();
	require_once("engine/libreria.php");
	include("engine/negocioseguridad.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	<link rel="stylesheet" type="text/css" href="css/template.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/styleNegocio.css" media="screen">
	<script type = 'text/javascript' src = 'js/AJax_ObjetoHTTP.js'></script>
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
				
					<a href = '#' onclick = 'agregarNegocio();'><div class = 'botones' > Agregar Negocio</div></a>
					<a href = '#' onclick = 'agregarEmpleado();'><div class = 'botones' > Agregar Empleado</div></a>
					<a href = '#' onclick = 'agregarCliente();'><div class = 'botones' > Agregar Cliente</div></a>
					<a href = '#' onclick = 'agregarFactura();'><div class = 'botones' > Agregar Factura</div></a>
					<a href = '#' onclick = 'mostrarClientes();'><div class = 'botones' > Mostrar Cliente</div></a>
					<a href = '#' onclick = 'mostrarFacturas();'><div class = 'botones' > Mostrar Factura</div></a>
					
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

								<td colspan = '4' align = 'center'><button style = "width: 200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpClientes' align = 'center'>
					<form method = 'POST' onsubmit = 'return validacionSignUpClientes();'>
						<table>
							<label > Registrar Cliente </label></br></br>
							<tr>	
								<th>Cedula:</th>
								<td><input type="text" id = 'txtCedula' name = 'txtCedula'></td>
								<th>Nombre:</th> 
								<td><input type="text" id = 'txtNombre' name = 'txtNombre'></td>
							</tr>
							<tr>
								<th>Apellido: </th>
								<td><input type="text" id = 'txtApellido' name = 'txtApellido'></td>
								<th>Direccion: </th>
								<td><input type="text" id = 'txtDireccion' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<th>Telefono Local:</th>
								<td><input type="text" id = 'txtTelefonoLocal' name = 'txtTelefonoLocal'></td>
								<th>Telefono Celular:</th> 
								<td><input type="text" id = 'txtTelefonoCelular' name = 'txtTelefonoCelular'></td>
							</tr>
							<tr>
								<th>Sexo:</th>
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
								<th>Email:</th> 
								<td><input type="text" id = 'txtEmail' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button style = "width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpEmpleados' align = 'center'> 
					<form method = 'POST' onsubmit = 'return validacionSignUpClientes();'>
						<label> Registrar Empleado </label></br></br>
						<table>
							<tr>
								<th>Cedula: </th>
								<td><input type="text" id = 'txtCedula' name = 'txtCedula'></td>
								<th>Nombre: </th>
								<td><input type="text" id = 'txtNombre' name = 'txtNombre'></td>
							</tr>
							<tr>
								<th>Apellido:</th>
								<td><input type="text" id = 'txtApellido' name = 'txtApellido'></td>
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
								<th>Sexo:</th>
								<td><select id = 'txtSexo'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
							
								<th>Estado Civil:</th>
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
								<td colspan = '4' align = 'center'> <button style="width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpFactura' align = 'center'>
					<form method = 'POST' onsubmit = 'return validacionSignUpFactura();'>
						<label> Registrar Factura </label></br></br></br>
							
						<table>
							<tr>
								<th>Cedula Cliente:</th>
								<td><input type = 'text' id = 'cedula' name = 'cedula'></td>
								<th>Servicio</th>
								<td><select id = 'servicio'>
									</select></td>
							</tr>
							<tr>
								<th>Costo</th>
								<td><input type = 'text' id = 'costo' name = 'costo'></td>
								<th>Descuento</th>
								<td><input type = 'text' id = 'descuento' name = 'descuento'></td>
							</tr>
							<tr>
								<th>Itbis</th>
								<td><input type = 'text' id = 'itbis' name = 'itbis'></td>
								<th>total</th>
								<td><input type = 'text' id = 'total' name = 'total'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button style = "width:200px;">Registrar</button></td>
							</tr>
						</table>
					</form>
					
				</div>
				<div id = 'mostrarCliente'>
					<table>
						<tr>
							<th>Cedula</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Direccion</th>
							<th>Telefono Local</th>
							<th>Telefono Cel</th>
							<th>Sexo</th>
							<th>Estado Civil</th>
							<th>Email</th>
						</tr>
					
					</table>
			
				</div>
				<div id = 'mostrarFactura'>
					<table>
						<th>ID Factura</th>
						<th> ID Peluqueria</th>
						<th>ID Cliente</th>
						<th>Servicio</th>
						<th>Costo</th>
						<th>Descuento</th>
						<th>Itbis</th>
						<th>Total</th>
						<th>Fecha</th>
					</table>
				</div>
			</div>
			
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>
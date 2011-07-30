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
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script type = 'text/javascript' src = 'js/AJax_ObjetoHTTP.js'></script>
	<script type = 'text/javascript' src = 'js/mapaNegocio.js'></script>
	<script type = 'text/javascript' src = 'js/SingIn.js'></script>
	
	
</head>

<body onload = "load();mapaLoad();">

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
				
					<a href = '#' onclick = "mostrarOcultar('SignUpNegocio');"><div class = 'botones' > Agregar Negocio</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpEmpleados');"><div class = 'botones' > Agregar Empleado</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpClientes');"><div class = 'botones' > Agregar Cliente</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpFactura');cargarDatosFactura();"><div class = 'botones' > Agregar Factura</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpServicio');"><div class = 'botones' > Agregar Servicio</div></a>
					<a href = '#' onclick = "mostrarOcultar('mostrarCliente');mostrarClientesF();"><div class = 'botones' > Mostrar Cliente</div></a>
					<a href = '#' onclick = "mostrarOcultar('mostrarFactura');mostrarFacturasF();"><div class = 'botones' > Mostrar Factura</div></a>
					
				</div>
				
				<div id="mapaNO"></div>
				
				<div id = "SignUpNegocio" align = "center" name="elemento" class="elementos"> 
				
					<form metdod = 'POST' onsubmit = 'return false' name = 'SignUpNegocio'>		
						<label> Registro de Negocio </label></br></br></br>
						<table>
							<tr>
								<td>Nombre Local: </td>
								<td> <input type = 'text' id = 'nombreNegocio' name = 'nombre' > </td>
								<td> RNC: </td>
								<td> <input type = 'text' id = 'rncNegocio' name = 'rnc' > </td>
							</tr>			
							<tr>		
								<td> Telefono 1:</td>
								<td> <input type = 'text' id = 'telefono1Negocio' name = 'telefono1' > </td>
								<td> Telefono 2:</td>
								<td> <input type = 'text' id = 'telefono2Negocio' name = 'telefono2' > </td>
							</tr>
							<tr>
								<td>Email: </td>
								<td> <input type = 'text' id = 'emailNegocio' name = 'email' > </td>
								<td>Direccion:</td> 
								<td><input type = 'text' id = 'direccionNegocio' name = 'direccion' ></td>
							</tr>
							
							<tr>
								<td>Longitud:</td> 
								<td><input type = 'text' id = 'longitudNegocio' name = 'longitud' readonly="readonly"></td>
								<td>Latitud:</td> 
								<td> <input type = 'text' id = 'latitudNegocio' name = 'latitud' readonly="readonly"> </td>
							</tr>
							<tr>
								<td>Zona:</td> 
								<td><input type = 'text' id = 'zonaNegocio' name = 'zona' ></td>
								<td>Provincia:</td>
								<td><input type = 'text' id = 'provinciaNegocio' name = 'provincia' ></td>
							</tr>
							<tr>

								<td colspan = '4' align = 'center'><button onclick = 'registrarNegocio();' style = "widtd: 200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
					
				</div>
				<div id = 'SignUpClientes' align = 'center' name="elemento" class="elementos">
					<form method = 'POST' onsubmit = 'return false;' name="SignUpCliente">
						<table>
							<label > Registrar Cliente </label></br></br>
							<tr>	
								<td>Cedula:</td>
								<td><input type="text" id = 'txtCedulaCliente' name = 'txtCedula'></td>
								<td>Nombre:</td> 
								<td><input type="text" id = 'txtNombreCliente' name = 'txtNombre'></td>
							</tr>
							<tr>
								<td>Apellido: </td>
								<td><input type="text" id = 'txtApellidoCliente' name = 'txtApellido'></td>
								<td>Direccion: </td>
								<td><input type="text" id = 'txtDireccionCliente' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<td>Telefono Local:</td>
								<td><input type="text" id = 'txtTelefonoLocalCliente' name = 'txtTelefonoLocal'></td>
								<td>Telefono Celular:</td> 
								<td><input type="text" id = 'txtTelefonoCelularCliente' name = 'txtTelefonoCelular'></td>
							</tr>
							<tr>
								<td>Sexo:</td>
								<td><select id = 'txtSexoCliente'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
								<td>Estado Civil: </td>
								<td><select id = 'txtEstadoCivilCliente'>
									<option value = ''></option>
									<option value = 'Soltero'> Soltero </option>
									<option value = 'Casado'> Casado </option>
								</select></td>
							</tr>
							<tr>
								<td>Email:</td> 
								<td><input type="text" id = 'txtEmailCliente' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button onclick = 'registrarCliente();' style = "width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpEmpleados' align = 'center' name="elemento" class="elementos"> 
					<form method = 'POST' onsubmit = 'return false;' name="SignUpEmpleado">
						<label> Registrar Empleado </label></br></br>
						<table>
							<tr>
								<td>Cedula: </td>
								<td><input type="text" id = 'txtCedulaEmpleado' name = 'txtCedula'></td>
								<td>Nombre: </td>
								<td><input type="text" id = 'txtNombreEmpleado' name = 'txtNombre'></td>
							</tr>
							<tr>
								<td>Apellido:</td>
								<td><input type="text" id = 'txtApellidoEmpleado' name = 'txtApellido'></td>
								<td>Direccion: </td>
								<td><input type="text" id = 'txtDireccionEmpleado' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<td>Telefono Local: </td>
								<td><input type="text" id = 'txtTelefonoLocalEmpleado' name = 'txtTelefonoLocal'></td>
								<td>Telefono Celular: </td>
								<td><input type="text" id = 'txtTelefonoCelularEmpleado' name = 'txtTelefonoCelular'></td>
							</tr>
							
							<tr>
								<td>Sexo:</td>
								<td><select id = 'txtSexoEmpleado'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
							
								<td>Estado Civil:</td>
								<td><select id = 'txtEstadoCivilEmpleado'>
									<option value = ''></option>
									<option value = 'Soltero'> Soltero </option>
									<option value = 'Casado'> Casado </option>
								</select></td>
							</tr>
							
							<tr>
								<td>Email: </td>
								<td><input type="text" id = 'txtEmailEmpleado' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'> <button onclick = 'registrarEmpleado();' style="width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpFactura' align = 'center' name="elemento" class="elementos">
					<form method = 'POST' onsubmit = 'return false;' name = 'SignUpFactura'>
						<label> Registrar Factura </label></br></br></br>
							
						<table>
							<tr>
								<td>Cliente:</td>
								<td><SELECT id = 'nombreClienteFactura' name = 'nombreClienteFactura'>
									<option value = ''> Seleccione...... </option>
									
									</SELECT></td>
								<td>Servicio</td>
								<td><SELECT  onchange = 'setCostos(this.value);' id = 'servicioFactura' name = 'servicioFactura'>
									<option value = ''> Seleccione...... </option>
									
									</SELECT></td>
							</tr>
							<tr>
								<td>Costo</td>
								<td><input type = 'text' id = 'costoFactura' name = 'costoFactura' value = '0'></td>
								<td>Descuento</td>
								<td><input type = 'text' id = 'descuentoFactura' name = 'descuentoFactura' value = '0'></td>
							</tr>
							<tr>
								<td>Itbis</td>
								<td><input type = 'text' id = 'itbisFactura' name = 'itbisFactura' value = '0'></td>
								<td>total</td>
								<td><input type = 'text' id = 'totalFactura' name = 'totalFactura' value = '0'></td>
							</tr>
							<tr>
								<td colspan = '2' align = 'center'><button onclick = 'calculoTotal();' style = "width:200px;">Total</button></td>
								<td colspan = '2' align = 'center'><button onclick = 'registrarFactura();' style = "width:200px;">Registrar</button></td>
							</tr>
						</table>
					</form>
					
				</div>
				<div id = 'SignUpServicio' align = 'center' name="elemento" class="elementos">
					<form method = 'POST' onsubmit = 'return false;' name = 'SignUpServicio'>
						<label> Registrar Servicio </label></br></br>
						<table>
							<tr>
								<th>Servicio</th>
								<td><input type = 'text' id = 'servicioServicio' name = 'servicioServicio'></td>
								<th>Costo</th>
								<td><input type = 'text' id = 'costoServicio' name = 'costoServicio'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button onclick = 'registrarServicio();' style = "width:200px;">Registrar</button></td>
							</tr>
						</table>
						
					</form>
				</div>
				<div id = 'mostrarCliente' name="elemento" class="elementosTable">
					<table id = 'mostrarClientes' >
					</table>
			
				</div>
				<div id = 'mostrarFactura' name="elemento" class="elementosTable">
					<table id = 'mostrarFacturas'>
						
					</table>
				</div>
			
			<div style="clear:both;height:20px;"></div>
			</div>
			
		</div>
		
		
	<div id="footer"></div>
		
	</div>
	
	
</body>

</html>
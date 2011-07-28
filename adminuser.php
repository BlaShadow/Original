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
	<script language="javascript">
	
	//mapa negocio
		function algo(){
		alert("entro");
				var latlng = new google.maps.LatLng(18.90,-70.40);

						var myOptions = {
						zoom: 8,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					
					var map = new google.maps.Map(document.getElementById("mapaNO"), myOptions);

			alert("salio");
		}
		
		window.onload = function(){
		
			document.getElementById("mapaNO").style.display = "block";
		alert("termino");
		}
	
	</script>
	
	
</head>

<body onload = "load();algo()">

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
					<a href = '#' onclick = "mostrarOcultar('SignUpClientes');"><div class = 'botones' > Agregar Empleado</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpEmpleados');"><div class = 'botones' > Agregar Cliente</div></a>
					<a href = '#' onclick = "mostrarOcultar('SignUpFactura');"><div class = 'botones' > Agregar Factura</div></a>
					<a href = '#' onclick = "mostrarOcultar('mostrarCliente');"><div class = 'botones' > Mostrar Cliente</div></a>
					<a href = '#' onclick = "mostrarOcultar('mostrarFactura');"><div class = 'botones' > Mostrar Factura</div></a>
					
				</div>
				
				
				<div id = "SignUpNegocio" align = "center" name="elemento"> 
				
					<div id="mapaNO" class="mapaNO" style="margin:auto;width:400px;background-color:white;">lkjhgghm</div>

				
					<form method = 'POST' onsubmit = 'return false'>		
						<label> Registro de Negocio </label></br></br></br>
						<table>
							<tr>
								<th>Nombre Local: </th>
								<td> <input type = 'text' id = 'nombreNegocio' name = 'nombre' > </td>
								<th> RNC: </th>
								<td> <input type = 'text' id = 'rncNegocio' name = 'rnc' > </td>
							</tr>			
							<tr>		
								<th> Telefono 1:</th>
								<td> <input type = 'text' id = 'telefono1Negocio' name = 'telefono1' > </td>
								<th> Telefono 2:</th>
								<td> <input type = 'text' id = 'telefono2Negocio' name = 'telefono2' > </td>
							</tr>
							<tr>
								<th>Email: </th>
								<td> <input type = 'text' id = 'emailNegocio' name = 'email' > </td>
								<th>Direccion:</th> 
								<td><input type = 'text' id = 'direccionNegocio' name = 'direccion' ></td>
							</tr>
							
							<tr>
								<th>Longitud:</th> 
								<td><input type = 'text' id = 'longitudNegocio' name = 'longitud' ></td>
								<th>Latitud:</th> 
								<td> <input type = 'text' id = 'latitudNegocio' name = 'latitud' > </td>
							</tr>
							<tr>
								<th>Zona:</th> 
								<td><input type = 'text' id = 'zonaNegocio' name = 'zona' ></td>
								<th>Provincia:</th>
								<td><input type = 'text' id = 'provinciaNegocio' name = 'provincia' ></td>
							</tr>
							<tr>

								<td colspan = '4' align = 'center'><button onclick = 'registrarNegocio();' style = "width: 200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
					
				</div>
				<div id = 'SignUpClientes' align = 'center' name="elemento">
					<form method = 'POST' onsubmit = 'return false;' name="signupCliente">
						<table>
							<label > Registrar Cliente </label></br></br>
							<tr>	
								<th>Cedula:</th>
								<td><input type="text" id = 'txtCedulaCliente' name = 'txtCedula'></td>
								<th>Nombre:</th> 
								<td><input type="text" id = 'txtNombreCliente' name = 'txtNombre'></td>
							</tr>
							<tr>
								<th>Apellido: </th>
								<td><input type="text" id = 'txtApellidoCliente' name = 'txtApellido'></td>
								<th>Direccion: </th>
								<td><input type="text" id = 'txtDireccionCliente' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<th>Telefono Local:</th>
								<td><input type="text" id = 'txtTelefonoLocalCliente' name = 'txtTelefonoLocal'></td>
								<th>Telefono Celular:</th> 
								<td><input type="text" id = 'txtTelefonoCelularCliente' name = 'txtTelefonoCelular'></td>
							</tr>
							<tr>
								<th>Sexo:</th>
								<td><select id = 'txtSexoCliente'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
								<th>Estado Civil: </th>
								<td><select id = 'txtEstadoCivilCliente'>
									<option value = ''></option>
									<option value = 'Soltero'> Soltero </option>
									<option value = 'Casado'> Casado </option>
								</select></td>
							</tr>
							<tr>
								<th>Email:</th> 
								<td><input type="text" id = 'txtEmailCliente' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button onclick = 'registrarCliente();' style = "width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpEmpleados' align = 'center' name="elemento"> 
					<form method = 'POST' onsubmit = 'return false;' name="signupemepleadosName">
						<label> Registrar Empleado </label></br></br>
						<table>
							<tr>
								<th>Cedula: </th>
								<td><input type="text" id = 'txtCedulaEmpleado' name = 'txtCedula'></td>
								<th>Nombre: </th>
								<td><input type="text" id = 'txtNombreEmpleado' name = 'txtNombre'></td>
							</tr>
							<tr>
								<th>Apellido:</th>
								<td><input type="text" id = 'txtApellidoEmpleado' name = 'txtApellido'></td>
								<th>Direccion: </th>
								<td><input type="text" id = 'txtDireccionEmpleado' name = 'txtDireccion'></td>
							</tr>
							<tr>
								<th>Telefono Local: </th>
								<td><input type="text" id = 'txtTelefonoLocalEmpleado' name = 'txtTelefonoLocal'></td>
								<th>Telefono Celular: </th>
								<td><input type="text" id = 'txtTelefonoCelularEmpleado' name = 'txtTelefonoCelular'></td>
							</tr>
							<tr>
								<th>Sexo:</th>
								<td><select id = 'txtSexoEmpleado'>
									<option value = ''></option>
									<option value = 'masculino'> Masculino </option>
									<option value = 'femenino'> Femenino </option>
									<option value = 'gay'> Gay </option>
									<option value = 'lesbiana'> Lesbiana </option>
								</select></td>
							
								<th>Estado Civil:</th>
								<td><select id = 'txtEstadoCivilEmpleado'>
									<option value = ''></option>
									<option value = 'Soltero'> Soltero </option>
									<option value = 'Casado'> Casado </option>
								</select></td>
							</tr>
							<tr>
								<th>Email: </th>
								<td><input type="text" id = 'txtEmailEmpleado' name = 'txtEmail'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'> <button onclick = 'registrarEmpleado();' style="width:200px;"> Registrar </button></td>
							</tr>
						</table>
					</form>
				</div>
				<div id = 'SignUpFactura' align = 'center' name="elemento">
					<form method = 'POST' onsubmit = 'return validacionSignUpFactura();'>
						<label> Registrar Factura </label></br></br></br>
							
						<table>
							<tr>
								<th>Cedula Cliente:</th>
								<td><input type = 'text' id = 'cedulaFactura' name = 'cedula'></td>
								<th>Servicio</th>
								<td><select id = 'servicio'>
									</select></td>
							</tr>
							<tr>
								<th>Costo</th>
								<td><input type = 'text' id = 'costoFactura' name = 'costo'></td>
								<th>Descuento</th>
								<td><input type = 'text' id = 'descuentoFactura' name = 'descuento'></td>
							</tr>
							<tr>
								<th>Itbis</th>
								<td><input type = 'text' id = 'itbisFactura' name = 'itbis'></td>
								<th>total</th>
								<td><input type = 'text' id = 'totalFactura' name = 'total'></td>
							</tr>
							<tr>
								<td colspan = '4' align = 'center'><button style = "width:200px;">Registrar</button></td>
							</tr>
						</table>
					</form>
					
				</div>
				<div id = 'mostrarCliente' name="elemento">
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
				<div id = 'mostrarFactura' name="elemento">
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
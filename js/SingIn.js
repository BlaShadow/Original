/* Creacion global de las variables mas usadas*/
	var cedula;
	var nombre;
	var apellido;
	var direccion;
	var telefono_local;
	var telefono_celular;
	var sexo;
	var estado_civil;
	var email;
	var telefono1;
	var telefono2;
	var rnc;
	var latitud;
	var longitud;
	var zona;
	var provincia;
	var servicio;
	var costo;
	var descuento;
	var itbis;
	var total;
	
	
	
/*oculta todos los div*/

function load(){
	
	elementos = document.getElementsByName("elemento");
	//document.getElementById("mapaNO").style.display="none";
	
	for(i=0;i<elementos.length;i++){
	
		elementos[i].style.display="none";
	}
	cargarDatosFactura();
}

function registrarNegocio(){
	if(validacionSignUpNegocio()){
		var varAjax_1 = getHTTPrequest();
		var respuesta01 = "";
		varAjax_1.open('GET',"engine/negocioregistrarnegocio.php/?nombre="+nombre.value+
		"&telefono1="+telefono1.value+"&telefono2="+telefono2.value+"&rnc="+rnc.value+
		"&email="+email.value+"&latitud="+latitud.value+"&longitud="+longitud.value+
		"&zona="+zona.value+"&provincia="+provincia.value+"&direccion="+direccion.value,true);
		
		varAjax_1.onreadystatechange = function(){
			if(varAjax_1.readyState == 4 && varAjax_1.status == 200){
				
				respuesta01 = varAjax_1.responseText;
				alert(respuesta01);
				if(respuesta01 == "Good"){
					document.SignUpNegocio.reset();
				}
				else{
					alert("pinche verga");
				}
			}
		}
	}
	varAjax_1.send(null);
}

function validacionSignUpNegocio(){
	nombre = document.getElementById("nombreNegocio");
	telefono1 = document.getElementById("telefono1Negocio");
	telefono2 = document.getElementById("telefono2Negocio");
	rnc = document.getElementById("rncNegocio");
	email = document.getElementById("emailNegocio");
	latitud = document.getElementById("latitudNegocio");
	longitud = document.getElementById("longitudNegocio");
	direccion = document.getElementById("direccionNegocio");
	zona = document.getElementById("zonaNegocio");
	provincia = document.getElementById("provinciaNegocio");
	
	var ind = "";
	
	if(nombre.value == ""){
		ind = "h";
		nombre.style.border = '3px solid blue';
	}
	else
	{
		nombre.style.border = '3px solid red';
	}
	if(telefono1.value == "" || isNaN(telefono1.value)){
		ind = "h";
		telefono1.style.border = '3px solid blue';
	}
	else{
		telefono1.style.border = '3px solid red';
	}
	if(telefono2.value == "" || isNaN(telefono2.value)){
		ind= "h";
		telefono2.style.border = '3px solid blue';
	}
	else{
		telefono2.style.border = '3px solid red';
	}
	if(rnc.value == "" || isNaN(rnc.value)){
		ind = "h";
		rnc.style.border = '3px solid blue';
	}
	else{
		rnc.style.border = '3px solid red';
	}
	if(direccion.value == ""){
		ind = "h";
		direccion.style.border = '3px solid blue';
	}
	else{
		direccion.style.border = '3px solid red';
	}
	if(email.value == ""){
		ind = "h";
		email.style.border = '3px solid blue';
	}
	else{
		email.style.border = '3px solid red';
	}
	if(latitud.value == "" || isNaN(latitud.value)){
		ind = "h";
		latitud.style.border = '3px solid blue';
	}
	else{
		latitud.style.border = '3px solid red';
	}
	if(longitud.value == "" || isNaN(longitud.value)){
		ind = "h";
		longitud.style.border = '3px solid blue';
	}
	else{
		longitud.style.border = '3px solid red';
	}
	if(zona.value == ""){
		ind = "h";
		zona.style.border = '3px solid blue';
	}
	else{
		zona.style.border = '3px solid red';
	}
	if(provincia.value == ""){
		ind = "h";
		provincia.style.border = '3px solid blue';
	}
	else{
		provincia.style.border = '3px solid red';
	}
	
	if(ind == "")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function registrarEmpleado(){
	
	if(validacionSignUpEmpleados()){
		alert(sexo.value+estado_civil.value);
		var varAjax_2 = getHTTPrequest();
		var respuesta="";
		varAjax_2.open('GET',"engine/negocioregistrarempleado.php/?cedula="+cedula.value+
		"&nombre="+nombre.value+"&apellido="+apellido.value+"&direccion="+direccion.value+
		"&telefono_local="+telefono_local.value+"&telefono_celular="+telefono_celular.value+
		"&sexo="+sexo.value+"&estado_civil="+estado_civil.value+"&email="+email.value,true);
		
		varAjax_2.onreadystatechange = function(){
			if(varAjax_2.readyState == 4 && varAjax_2.status == 200){
				respuesta = varAjax_2.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					
					document.SignUpEmpleado.reset();
					
				}
				else{
					alert("la verga");
				}
			}
			
		}
		
	}
	varAjax_2.send(null);
}
function validacionSignUpEmpleados(){
	cedula = document.getElementById("txtCedulaEmpleado");
	nombre = document.getElementById("txtNombreEmpleado");
	apellido = document.getElementById("txtApellidoEmpleado");
	direccion = document.getElementById("txtDireccionEmpleado");
	telefono_local = document.getElementById("txtTelefonoLocalEmpleado");
	telefono_celular = document.getElementById("txtTelefonoCelularEmpleado");
	sexo = document.getElementById("txtSexoEmpleado");
	estado_civil = document.getElementById("txtEstadoCivilEmpleado");
	email = document.getElementById("txtEmailEmpleado");
	var ind = "";
	
	
	if(cedula.value == "" || isNaN(cedula.value) || cedula.value.length < 11){
		ind = "h";
		cedula.style.border = '3px solid blue';
		
	}
	else
	{
		cedula.style.border = '3px solid red';
	}
	
	
	if(nombre.value == "" || !isNaN(nombre.value)){
		ind = "h";
		nombre.style.border = '3px solid blue';
	}
	else
	{
		nombre.style.border = '3px solid red';
	}
	if(apellido.value == "" || !isNaN(apellido.value)){
		ind = "h";
		apellido.style.border = '3px solid blue';
	}
	else{
		apellido.style.border = '3px solid red';
	}
	if(direccion.value == ""){
		ind = "h";
		direccion.style.border = '3px solid blue';
	}
	else{
		direccion.style.border = '3px solid red';
	}
	if(telefono_local.value == "" || isNaN(telefono_local.value)){
		ind = "h";
		telefono_local.style.border = '3px solid blue';
	}
	else{
		telefono_local.style.border = '3px solid red';
	}
	if(telefono_celular.value == "" || isNaN(telefono_celular.value)){
		ind = "h";
		telefono_celular.style.border = '3px solid blue';
	}
	else{
		telefono_celular.style.border = '3px solid red';
	}
	
	if(sexo.value == ""){
		ind = "h";
		sexo.style.border = '3px solid blue';
	}
	else{
		sexo.style.border = '3px solid red';
	}
	if(estado_civil.value == ""){
		ind = "h";
		estado_civil.style.border = '3px solid blue';
	}
	else{
		estado_civil.style.border = '3px solid red';
	}
	if(email.value == ""){
		ind = "h";
		email.style.border = '3px solid blue';
	}
	else{
		email.style.border = '3px solid red';
	}
	if(ind == "")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function registrarCliente(){
	
	if(validacionSignUpClientes()){
		alert(sexo.value+estado_civil.value);
		var varAjax_3 = getHTTPrequest();
		var respuesta="";
		varAjax_3.open('GET',"engine/negocioregistrarclientes.php/?cedula="+cedula.value+
		"&nombre="+nombre.value+"&apellido="+apellido.value+"&direccion="+direccion.value+
		"&telefono_local="+telefono_local.value+"&telefono_celular="+telefono_celular.value+
		"&sexo="+sexo.value+"&estado_civil="+estado_civil.value+"&email="+email.value,true);
		
		varAjax_3.onreadystatechange = function(){
			if(varAjax_3.readyState == 4 && varAjax_3.status == 200){
				respuesta = varAjax_3.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					document.SignUpCliente.reset();
				}
				else{
					alert("la verga");
				}
			}
			
		}
		
	}
	varAjax_3.send(null);
}
function validacionSignUpClientes(){
	cedula = document.getElementById("txtCedulaCliente");
	nombre = document.getElementById("txtNombreCliente");
	apellido = document.getElementById("txtApellidoCliente");
	direccion = document.getElementById("txtDireccionCliente");
	telefono_local = document.getElementById("txtTelefonoLocalCliente");
	telefono_celular = document.getElementById("txtTelefonoCelularCliente");
	sexo = document.getElementById("txtSexoCliente");
	estado_civil = document.getElementById("txtEstadoCivilCliente");
	email = document.getElementById("txtEmailCliente");
	var ind = "";
	
	if(cedula.value == "" || isNaN(cedula.value) || cedula.value.length < 11){
		ind = "h";
		cedula.style.border = '3px solid blue';
		
	}
	else
	{
		cedula.style.border = '3px solid red';
	}
	
	
	if(nombre.value == "" || !isNaN(nombre.value)){
		ind = "h";
		nombre.style.border = '3px solid blue';
	}
	else
	{
		nombre.style.border = '3px solid red';
	}
	if(apellido.value == "" || !isNaN(apellido.value)){
		ind = "h";
		apellido.style.border = '3px solid blue';
	}
	else{
		apellido.style.border = '3px solid red';
	}
	if(direccion.value == ""){
		ind = "h";
		direccion.style.border = '3px solid blue';
	}
	else{
		direccion.style.border = '3px solid red';
	}
	if(telefono_local.value == "" || isNaN(telefono_local.value)){
		ind = "h";
		telefono_local.style.border = '3px solid blue';
	}
	else{
		telefono_local.style.border = '3px solid red';
	}
	if(telefono_celular.value == "" || isNaN(telefono_celular.value)){
		ind = "h";
		telefono_celular.style.border = '3px solid blue';
	}
	else{
		telefono_celular.style.border = '3px solid red';
	}
	
	if(sexo.value == ""){
		ind = "h";
		sexo.style.border = '3px solid blue';
	}
	else{
		sexo.style.border = '3px solid red';
	}
	if(estado_civil.value == ""){
		ind = "h";
		estado_civil.style.border = '3px solid blue';
	}
	else{
		estado_civil.style.border = '3px solid red';
	}
	if(email.value == ""){
		ind = "h";
		email.style.border = '3px solid blue';
	}
	else{
		email.style.border = '3px solid red';
	}
	if(ind == "")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function cargarDatosFactura(){
	var varAjax_4 = getHTTPrequest();
	varAjax_4.open('GET',"engine/negociocargadatofactura.php",true);
	varAjax_4.onreadystatechange = function(){
		if(varAjax_4.readyState == 4 && varAjax_4.status == 200){
			
			var select1 = document.getElementById('nombreClienteFactura');
			var select2 = document.getElementById('servicioFactura');
			
			var xml = varAjax_4.responseXML;
			var nombre1 = xml.getElementsByTagName('nombre');
			var apellido1 = xml.getElementsByTagName('apellido');
			var cedula1 = xml.getElementsByTagName('cedula');
			var servicio1 = xml.getElementsByTagName('servicio');
			
			
			select1.innerHTML = "";
			select1.innerHTML = "<option value = ''>Seleccione ......</option>";
			for(var ind = 0;ind < nombre1.length;ind++){
				select1.innerHTML += "<option value = '"+cedula1[ind].firstChild.nodeValue+"'>"+nombre1[ind].firstChild.nodeValue+" " +apellido1[ind].firstChild.nodeValue+"</option>";
			}
			select2.innerHTML = "";
			select2.innerHTML = "<option value = ''>Seleccione ......</option>";
			for(var ind = 0;ind < servicio1.length;ind++){
				select2.innerHTML += "<option value = '"+servicio1[ind].firstChild.nodeValue+"'>"+servicio1[ind].firstChild.nodeValue+"</option>";
			}
		}
	}
	varAjax_4.send(null);
}
function setCostos(servicio){
	var varAjax_7 = getHTTPrequest();
	varAjax_7.open('GET',"engine/negociocargadatofactura.php",true);
	varAjax_7.onreadystatechange = function(){
		if(varAjax_7.readyState == 4 && varAjax_7.status == 200){
			var xml = varAjax_7.responseXML;
			var servicio1 = xml.getElementsByTagName('servicio');
			var costo1 = xml.getElementsByTagName('costo');
			for(var ind = 0;ind < servicio1.length;ind++){
				if(servicio1[ind].firstChild.nodeValue == servicio){
					document.getElementById('costoFactura').value = costo1[ind].firstChild.nodeValue;
					break;
				}
			}
		}
	}
	varAjax_7.send(null);
}
function calculoTotal(){
	costo = document.getElementById('costoFactura').value;
	descuento = document.getElementById('descuentoFactura').value;
	itbis = document.getElementById('itbisFactura').value;
	total = document.getElementById('totalFactura');
	var tot;
	
	tot = (costo - descuento);
	if(itbis > 0){
		tot = tot+((costo * itbis)/100);
	}
	total.value = tot.toFixed(2);
}
function registrarFactura(){
	if(validacionSignUpFactura()){
		var varAjax_6 = getHTTPrequest();
		var respuesta = "";
		
		varAjax_6.open('GET',"engine/negocioregistrarfactura.php/?cliente="+
		cliente.value+"&servicio="+servicio.value+"&costo="+costo.value+"&descuento="+descuento.value+
		"&itbis="+itbis.value+"&total="+total.value,true);
		
		varAjax_6.onreadystatechange = function(){
			if(varAjax_6.readyState == 4 && varAjax_6.status == 200){
				respuesta = varAjax_6.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					document.SignUpFactura.reset();
				}
				else{
					alert("que verga esta");
				}
			}
		}
	}
	varAjax_6.send(null);
}
function validacionSignUpFactura(){
	cliente = document.getElementById('nombreClienteFactura');
	servicio = document.getElementById('servicioFactura');
	costo = document.getElementById('costoFactura');
	descuento = document.getElementById('descuentoFactura');
	itbis = document.getElementById('itbisFactura');
	total = document.getElementById('totalFactura');
	var ind = "";
	
	if(cliente.value == ""){
		ind = "h";
		cliente.style.border = '3px solid blue';
	}
	else
	{
		cliente.style.border = '3px solid red';
	}	
	if(servicio.value == ""){
		ind = "h";
		servicio.style.border = '3px solid blue';
	}
	else{
		servicio.style.border = '3px solid red';
	}	
	if(costo.value == "" || isNaN(costo.value)){
		ind = "h";
		costo.style.border = '3px solid blue';
	}
	else{
		costo.style.border = '3px solid red';
	}
	if(descuento.value == "" || isNaN(descuento.value)){
		ind = "h";
		descuento.style.border = '3px solid blue';
	}
	else{
		descuento.style.border = '3px solid red';
	}
	if(itbis.value == "" || isNaN(itbis.value)){
		ind = "h";
		itbis.style.border = '3px solid blue';
	}
	else{
		itbis.style.border = '3px solid red';
	}
	if(total.value == "" || isNaN(total.value)){
		ind = "h";
		total.style.border = '3px solid blue';
	}
	else{
		total.style.border = '3px solid red';
	}
	if(ind == ""){
		return true;
	}
	else{
		return false;
	}	
}

function registrarServicio(){
	if(validacionSignUpServicio()){
		var varAjax_5 = getHTTPrequest();
		var respuesta = "";
		varAjax_5.open('GET',"engine/negocioregistrarservicio.php?servicio="+
		servicio.value+"&costo="+costo.value,true);
		varAjax_5.onreadystatechange = function(){
			if(varAjax_5.readyState == 4 && varAjax_5.status == 200){
				respuesta = varAjax_5.responseText;
				if(respuesta == "Good"){
					document.SignUpFactura.reset();
				}
				else{
					alert(respuesta);
				}
			}
		}
	}
	varAjax_5.send(null);
}

function validacionSignUpServicio(){
	servicio = document.getElementById('servicioServicio');
	costo = document.getElementById('costoServicio');
	
	var ind = "";
	
	if(costo.value == "" || isNaN(costo.value)){
		ind = "h";
		costo.style.border = '3px solid blue';
	}
	else
	{
		costo.style.border = '3px solid red';
	}
	if(servicio.value == "" || !isNaN(servicio.value)){
		ind = "h";
		servicio.style.border = '3px solid blue';
	}
	else
	{
		servicio.style.border = '3px solid red';
	}
	if(ind == "")
	{
		return true;
	}
	else
	{
		return false;
	}

}
// Muestra los clientes
function mostrarClientesF(){
	var varAjax_8 = getHTTPrequest();
	varAjax_8.open('GET',"engine/negociomostrarcliente.php",true);
	varAjax_8.onreadystatechange = function(){
		if(varAjax_8.readyState == 4 && varAjax_8.status == 200){
			var xml = varAjax_8.responseXML;
			var table = document.getElementById('mostrarClientes');
			table.innerHTML = "";
			table.innerHTML = "<tr><td>Cedula</td><td>Nombre</td><td>Apellido</td><td>Direccion</td><td>Telefono Local</td><td>Telefono Cel</td><td>Sexo</td><td>Estado Civil</td><td>Email</td></tr>";
			for(var ind1 = 0;ind1 < xml.getElementsByTagName('persona').length;ind1++){
				var tr = document.createElement('tr');
				for(var ind2 = 0; ind2 < xml.getElementsByTagName('persona')[ind1].childNodes.length;ind2++){
					var td = document.createElement('td');
					td.innerHTML = xml.getElementsByTagName('persona')[ind1].childNodes[ind2].firstChild.nodeValue;
					tr.appendChild(td);
				}
				table.appendChild(tr);
			}
		}
	}
	varAjax_8.send(null);
}
function mostrarFacturasF(){
	var varAjax_9 = getHTTPrequest();
	varAjax_9.open('GET',"engine/negociomostrarfactura.php",true);
	varAjax_9.onreadystatechange = function(){
		if(varAjax_9.readyState == 4 && varAjax_9.status == 200){
			var xml = varAjax_9.responseXML;
			var table1 = document.getElementById('mostrarFacturas');
			table1.innerHTML = "";
			table1.innerHTML = "<tr><td>ID Factura</td><td>Cliente</td><td>Servicio</td><td>Costo</td><td>Descuento</td><td>Itbis</td><td>Total</td><td>Fecha</td></tr>";
			for(var ind1 = 0;ind1 < xml.getElementsByTagName('factura').length;ind1++){
				var tr = document.createElement('tr');
				for(var ind2 = 0; ind2 < xml.getElementsByTagName('factura')[ind1].childNodes.length;ind2++){
					var td = document.createElement('td');
					td.innerHTML = xml.getElementsByTagName('factura')[ind1].childNodes[ind2].firstChild.nodeValue;
					tr.appendChild(td);
				
				}
				var td = document.createElement('td');
				td.setAttribute('align','center');
				td.innerHTML = "<button onclick = 'eliminarFactura("+xml.getElementsByTagName('factura')[ind1].childNodes[0].firstChild.nodeValue+");'>Eliminar</button>";
				tr.appendChild(td);
				table1.appendChild(tr);
			}
		}
	}
	varAjax_9.send(null);
}
function eliminarFactura(id_factura){
	if(confirm("Seguro que decea eliminar esta factura?")){
		var varAjax_0 = getHTTPrequest();
		varAjax_0.open('GET',"engine/negocioeliminarfactura.php?id_factura="+id_factura,true);
		varAjax_0.onreadystatechange = function(){
			if(varAjax_0.readyState == 4 && varAjax_0.status == 200){
				var respuesta = varAjax_0.responseText;
				if(respuesta == "Good"){
					alert("Borrado");
				}
			}
		}
	}
	varAjax_0.send(null);
	mostrarFacturasF();
}
// Funcion que muestra el div seleccionado
function mostrarOcultar(div){

	elementos = document.getElementsByName("elemento");
	
	for(i=0;i<elementos.length;i++){
		elementos[i].style.display="none";
	}
	
	if(div=="SignUpNegocio"){
		document.getElementById("mapaNO").style.display="block";
	}else{
		document.getElementById("mapaNO").style.display="none";
	}
	document.getElementById(div).style.display="block";
}

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
	var SignUpNegocio = document.getElementById("SignUpNegocio");
	var SignUpClientes = document.getElementById("SignUpClientes");
	var SignUpEmpleados = document.getElementById("SignUpEmpleados");
	var SignUpServicios = document.getElementById("SignUpServicios");
	var SignUpFactura = document.getElementById("SignUpFactura");
	var mostrarCliente = document.getElementById("mostrarCliente");
	var mostrarFactura = document.getElementById("mostrarFactura");
	
	SignUpNegocio.style.display = "none";
	SignUpClientes.style.display = "none";
	SignUpEmpleados.style.display = "none";
	SignUpFactura.style.display = "none";
	SignUpServicios.style.display = "none";
	mostrarCliente.style.display = "none";
	mostrarFactura.style.display = "none";
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
					nombre.value="";
					telefono1.value="";
					telefono2.value="";
					rnc.value="";
					email.value="";
					latitud.value="";
					longitud.value="";
					direccion.value="";
					zona.value="";
					provincia.value="";
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
		var respuesta=""
		varAjax_2.open('GET',"engine/negocioregistrarempleado.php/?cedula="+cedula.value+
		"&nombre="+nombre.value+"&apellido="+apellido.value+"&direccion="+direccion.value+
		"&telefono_local="+telefono_local.value+"&telefono_celular="+telefono_celular.value+
		"&sexo="+sexo.value+"&estado_civil="+estado_civil.value+"&email="+email.value,true);
		
		varAjax_2.onreadystatechange = function(){
			if(varAjax_2.readyState == 4 && varAjax_2.status == 200){
				respuesta = varAjax_2.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					cedula.value="";
					nombre.value="";
					apellido.value="";
					telefono_local.value="";
					telefono_celular.value="";
					email.value="";
					direccion.value="";
					sexo.value="";
					estado_civil.value="";
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
		var respuesta=""
		varAjax_3.open('GET',"engine/negocioregistrarclientes.php/?cedula="+cedula.value+
		"&nombre="+nombre.value+"&apellido="+apellido.value+"&direccion="+direccion.value+
		"&telefono_local="+telefono_local.value+"&telefono_celular="+telefono_celular.value+
		"&sexo="+sexo.value+"&estado_civil="+estado_civil.value+"&email="+email.value,true);
		
		varAjax_3.onreadystatechange = function(){
			if(varAjax_3.readyState == 4 && varAjax_3.status == 200){
				respuesta = varAjax_3.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					cedula.value="";
					nombre.value="";
					apellido.value="";
					telefono_local.value="";
					telefono_celular.value="";
					email.value="";
					direccion.value="";
					sexo.value="";
					estado_civil.value="";
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
function registrarServicio(){
	if(validacionSignUpServicio()){
		var varAjax_4 = getHTTPrequest();
		var respuesta = "";
		
		varAjax_4.open('GET','engine/negocioregistrarservicio.php?servicio='+
		servicio.value+'&costo='+costo.value,true);
		varAjax_4.onreadystatechange = function(){
			if(varAjax_4.readyState == 4 && varAjax_4.status == 200){
				respuesta = varAjax_4.responseText;
				if(respuesta == "Good"){
					servicio.value="";
					costo.value="";
				}
				else{
				
					alert("Que verga esta");
				}
			}
			
		}
		
	}
	varAjax_4.send(null);
}
function validacionSignUpServicio(){
	servicio = document.getElementById("servicioServicio");
	costo = document.getElementById("costoServicio");
	var ind = "";
	
	if(costo.value == "" || isNaN(costo.value)){
		ind = "h";
		costo.style.border = '3px solid blue';
		
	}
	else
	{
		costo.style.border = '3px solid red';
	}
	if(servicio.value == ""){
		ind = "h";
		servicio.style.border = '3px solid blue';
	}
	else{
		servicio.style.border = '3px solid red';
	}
	if(ind == ""){
		return true;
	}
	else{
		return false;
	}

}
function cargadatofactura(){
	
	var varAjax_5 = getHTTPrequest();
	var respuesta = "";
	varAjax_5.open('GET',"engine/negociocargadatofactura.php",true);
	alert(varAjax_5);
	varAjax_5.onreadystatechange = function(){
		if(varAjax_5.readyState == 4 && varAjax_5.status == 200){
			alert(varAjax_5.responseXML.getElementsByTagName('nombre')[0].childNodes[0].nodeValue);
		}
	}
	varAjax_5.send(null);
}

function validacionSignUpFactura(){
	cedula = document.getElementById("cedulaFactura");
	servicio = document.getElementById("servicioFactura");
	costo = document.getElementById("costoFactura");
	descuento = document.getElementById("descuentoFactura");
	itbis = document.getElementById("itbisFactura");
	total = document.getElementById("totalFactura");
	
	if(cedula.value == "" || isNaN(cedula.value) || cedula.value.length < 11){
		ind = "h";
		cedula.style.border = '3px solid blue';
	}
	else
	{
		cedula.style.border = '3px solid red';
	}
	
	if(costo.value == "" || !isNaN(costo.value)){
		ind = "h";
		costo.style.border = '3px solid blue';
	}
	else{
		costo.style.border = '3px solid red';
	}
	if(descuento.value == "" || !isNaN(descuento.value)){
		ind = "h";
		descuento.style.border = '3px solid blue';
	}
	else{
		descuento.style.border = '3px solid red';
	}
	if(itbis.value == "" || !isNaN(itbis.value)){
		ind = "h";
		itbis.style.border = '3px solid blue';
	}
	else{
		itbis.style.border = '3px solid red';
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

function agregarNegocio(){

	if(SignUpNegocio.style.display == "none"){
		SignUpNegocio.style.display = "block";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "none";
	}
	else{
		SignUpNegocio.style.display = "none";
	}
}

function agregarCliente(){
	if(SignUpClientes.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "block";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "none";
	}
	else{
		SignUpClientes.style.display = "none";
	}
}

function agregarEmpleado(){

	if( SignUpEmpleados.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "block";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "none";
	}
	else{
		SignUpEmpleados.style.display = "none";
	}
}
function agregarFactura(){

	if(SignUpFactura.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "block";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "none";
	}
	else{
		SignUpFactura.style.display = "none";
	}
}
function agregarServicio(){

	if(SignUpServicios.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "block";
	}
	else{
		SignUpServicios.style.display = "none";
	}
}
function mostrarClientes(){

	if(mostrarCliente.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "block";
		mostrarFactura.style.display = "none";
		SignUpServicios.style.display = "none";
	}
	else{
		mostrarCliente.style.display = "none";
	}
}
function mostrarFacturas(){
	if(mostrarFactura.style.display == "none"){
		SignUpNegocio.style.display = "none";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
		SignUpFactura.style.display = "none";
		mostrarCliente.style.display = "none";
		mostrarFactura.style.display = "block";
		SignUpServicios.style.display = "none";
	}
	else{
	
		mostrarFactura.style.display = "none";
	}
}

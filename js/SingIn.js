/*oculta todos los div*/
function load(){
	var SignUpNegocio = document.getElementById("SignUpNegocio");
	var SignUpClientes = document.getElementById("SignUpClientes");
	var SignUpEmpleados = document.getElementById("SignUpEmpleados");
	var SignUpFactura = document.getElementById("SignUpFactura");
	var mostrarCliente = document.getElementById("mostrarCliente");
	var mostrarFactura = document.getElementById("mostrarFactura");
	
	SignUpNegocio.style.display = "none";
	SignUpClientes.style.display = "none";
	SignUpEmpleados.style.display = "none";
	SignUpFactura.style.display = "none";
	mostrarCliente.style.display = "none";
	mostrarFactura.style.display = "none";
}

function registrarNegocio(){
	if(validacionSignUpNegocio()){
		var varAjax1 = getHTTPrequest();
		var respuesta = "";
		varAjax1.open('GET',"engine/negocioregistrarnegocio.php/?nombre="+nombre+
		"&telefono1="+telefono1+"&telefono2="+telefono2+"&rnc="+rnc+"&email="+email+
		"&latitud="+latitud+"&longitud="+direccion+"&zona="+zona+"&provincia="+provincia,true)
		varAjax1.onreadystatechange = function(){
			if(varAjax1.readyState
			
		}
	}

}

function validacionSignUpNegocio(){
	var nombre = document.getElementById("nombre");
	var telefono1 = document.getElementById("telefono1");
	var telefono2 = document.getElementById("telefono2");
	var rnc = document.getElementById("rnc");
	var email = document.getElementById("email");
	var latitud = document.getElementById("latitud");
	var longitud = document.getElementById("longitud");
	var direccion = document.getElementById("direccion");
	var zona = document.getElementById("zona");
	var provincia = document.getElementById("provincia");
	
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
function ValidacionSignUpClientes(){
	var cedula = document.getElementById("txtCedula");
	var nombre = document.getElementById("txtNombre");
	var apellido = document.getElementById("txtApellido");
	var direccion = document.getElementById("txtDireccion");
	var telefono_local = document.getElementById("txtTelefonoLocal");
	var telefono_celular = document.getElementById("txtTelefonoCelular");
	var sexo = document.getElementById("txtSexo");
	var estado_civil = document.getElementById("txtEstadoCivil");
	var email = document.getElementById("txtEmail");
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
function validacionSignUpFactura(){
	var cedula = document.getElementById("cedula");
	var servicio = document.getElementById("servicio");
	var costo = document.getElementById("costo");
	var descuento = document.getElementById("descuento");
	var itbis = document.getElementById("itbis");
	var total = document.getElementById("total");
	
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
	}
	else{
		SignUpFactura.style.display = "none";
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
	
	}
	else{
	
		mostrarFactura.style.display = "none";
	}
}

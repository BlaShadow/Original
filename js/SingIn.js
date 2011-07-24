function loadNegocio(){
	var singIn = document.getElementById("singIn");
	//$("#login").show("slow");
	$("#singIn").hide(2000);
	singIn.style.display = "none";

}
function load(){
	var SignUpNegocio = document.getElementById("SignUpNegocio");
	var SignUpClientes = document.getElementById("SignUpClientes");
	var SignUpEmpleados = document.getElementById("SignUpEmpleados");
	
	SignUpNegocio.style.display = "none";
	SignUpClientes.style.display = "none";
	SignUpEmpleados.style.display = "none";
	

}

function validacionSingIn(){
	var cedula = document.getElementById("txtCedula");
	var nombre = document.getElementById("txtNombre");
	var apellido = document.getElementById("txtApellido");
	var nombre_usuario = document.getElementById("txtNombreUsuario");
	var password = document.getElementById("txtPassword");
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
	if(nombre_usuario.value == ""){
		ind= "h";
		nombre_usuario.style.border = '3px solid blue';
	}
	else{
		nombre_usuario.style.border = '3px solid red';
	}
	if(password.value == "" || password.value.length < 6){
		ind = "h";
		password.style.border = '3px solid blue';
	}
	else{
		password.style.border = '3px solid red';
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
function validacionLogin(){
	var user = document.getElementById("user");
	var password = document.getElementById("password");
	var ind = "";
	
	if(user.value == ""){
		ind = "h";
		user.style.border = '3px solid red';
	}
	else{
		user.style.border = '3px solid black';
	}
	if(password.value == "" || password.value.length < 6){
		ind = "h";
		password.style.border = '3px solid red';
	}
	else{
		password.style.border = '3px solid black';
	}
	if(ind == ""){
		return true;
	}
	else{
		return false;
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
function registrarse(){
	
	var singIn = document.getElementById("singIn");
	var login = document.getElementById("login");
	
	if(singIn.style.display == 'none'){
	
	$("#singIn").show("slow");
	$("#login").hide(2000);
	
		//singIn.style.display = 'block';
		//login.style.display = 'none';
	}
	else{
		//login.style.display = 'block';
		$("#login").show("slow");
		$("#singIn").hide(2000);
		//singIn.style.display = 'none';
	}
}
function agregarNegocio(){

	if(SignUpNegocio.style.display == "none"){
		SignUpNegocio.style.display = "block";
		SignUpClientes.style.display = "none";
		SignUpEmpleados.style.display = "none";
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
	}
	else{
		SignUpEmpleados.style.display = "none";
	}
}

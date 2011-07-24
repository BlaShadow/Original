

function loadNegocio(){
	var singIn = document.getElementById("singIn");
	//$("#login").show("slow");
	$("#singIn").hide(2000);
	singIn.style.display = "none";

}
function loguear(){
	var valor = validacionLogin();
	alert(valor);
	if(valor){
		var varAjax = getHTTPrequest();
		var respuesta = "";
		
		varAjax.open('GET',"engine/negociologin.php/?usuario="+user.value+"&password="+password.value,true);
		varAjax.onreadystatechange = function(){
			if(varAjax.readyState==4 && varAjax.status==200){
				respuesta = varAjax.responseText;
				if(respuesta == "autentificado"){
					window.location = "adminuser.php";
				}
				else{
					var mensaje = document.getElementById("Mensaje");
					mensaje.innerHTML = "<label style = 'font-color:white;'> Error Contrasena</label>";
				}	
				
			}
		}
		varAjax.send(null);
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


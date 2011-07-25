var cedula;
	var nombre;
	var apellido;
	var nombre_usuario;
	var password;
	var direccion;
	var telefono_local;
	var telefono_celular;
	var sexo;
	var estado_civil;
	var email;

function loadNegocio(){
	var singIn = document.getElementById("singIn");
	//$("#login").show("slow");
	$("#singIn").hide(2000);
	singIn.style.display = "none";
	
	cedula = document.getElementById("txtCedula");
	nombre = document.getElementById("txtNombre");
	apellido = document.getElementById("txtApellido");
	nombre_usuario = document.getElementById("txtNombreUsuario");
	password = document.getElementById("txtPassword");
	direccion = document.getElementById("txtDireccion");
	telefono_local = document.getElementById("txtTelefonoLocal");
	telefono_celular = document.getElementById("txtTelefonoCelular");
	sexo = document.getElementById("txtSexo");
	estado_civil = document.getElementById("txtEstadoCivil");
	email = document.getElementById("txtEmail");

}
function loguear(){
	if(validacionLogin()){
		var varAjax = getHTTPrequest();
		var respuesta = "";
		varAjax.open('GET',"engine/negociologin.php/?usuario="+user.value+"&password="+pass.value,true);
		varAjax.onreadystatechange = function(){
			if(varAjax.readyState==4 && varAjax.status==200){
				respuesta = varAjax.responseText;
				alert(respuesta);
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
function registrarUsuario(){
	if(validacionSingIn()){
		var varAjax2 = getHTTPrequest();
		var respuesta="";
		varAjax2.open('GET',"engine/negocioregistrarusuario.php/?cedula="+cedula.value+"&nombre="+nombre.value+
		"&apellido="+apellido.value+"&nombre_usuario="+nombre_usuario.value+"&contrasena="+password.value+
		"&direccion="+direccion.value+"&telefono_local="+telefono_local.value+"&telefono_celular="+telefono_celular+
		"&sexo"+sexo+"&estado_civil="+estado_civil+"&email="+email,true);
		
		varAjax2.onreadystatechange = function(){
			if(varAjax2.readyState==4 && varAjax2.status==200){
				respuesta = varAjax2.responseText;
				alert(respuesta);
				if(respuesta == "Good"){
					window.location = "../Original/negocio.php";
				}
				else{
					alert("la verga");
				}
			}
			
		}
	}
	varAjax2.send(null);
}
function validacionLogin(){
	var user = document.getElementById("user");
	var pass = document.getElementById("pass");
	var ind = "";
	
	if(user.value == ""){
		ind = "h";
		user.style.border = '3px solid red';
	}
	else{
		user.style.border = '3px solid black';
	}
	if(pass.value == "" || pass.value.length < 6){
		ind = "h";
		pass.style.border = '3px solid red';
	}
	else{
		pass.style.border = '3px solid black';
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


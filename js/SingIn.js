function validacion(){
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

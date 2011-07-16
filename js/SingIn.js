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
	
	if(cedula.value == "" || isNaN(cedula.value)){
		ind = "h";
		cedula.style.border = '3px solid blue';
	}
	if(nombre.value == "" || !isNaN(nombre.value)){
		ind = "h";
		nombre.style.border = '3px solid blue';
	}
	if(apellido.value == "" || !isNaN(apellido.value)){
		ind = "h";
		apellido.style.border = '3px solid blue';
	}
	if(nombre_usuario.value == ""){
		ind= "h";
		nombre_usuario.style.border = '3px solid blue';
	}
	if(password.value == ""){
		ind = "h";
		password.style.border = '3px solid blue';
	}
	if(direccion.value == ""){
		ind = "h";
		direccion.style.border = '3px solid blue';
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

<?php

	class Conexion{
	
		public function conexion(){
		
			mysql_connect("localhost","root","");
			mysql_select_db("peluqueria");
		
		}
		
		public function closeConexion(){
		
			mysql_close();
		
		}
	
	}

?>
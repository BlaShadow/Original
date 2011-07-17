CREATE DATABASE Peluqueria;

USE Peluqueria;

CREATE TABLE  `Peluqueria`.`datos_personales` (
 `cedula` INT( 11 ) NOT NULL PRIMARY KEY ,
 `nombre` VARCHAR( 40 ) NOT NULL ,
 `apellido` VARCHAR( 40 ) NOT NULL ,
 `direccion` VARCHAR( 100 ) NOT NULL ,
 `telefono_local` VARCHAR( 15 ) NOT NULL ,
 `telefono_celular` VARCHAR( 15 ) NOT NULL ,
 `sexo` VARCHAR( 10 ) NOT NULL ,
 `estado_civil` VARCHAR( 10 ) NOT NULL ,
 `email` VARCHAR( 10 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE  `Peluqueria`.`usuario` (
`cedula` INT( 11 ) NOT NULL,
 FOREIGN KEY(cedula) REFERENCES datos_personales(cedula),
`nombre_usuario` VARCHAR( 20 ) NOT NULL ,
`contrasena` VARCHAR( 12 ) NOT NULL ,
`clase` VARCHAR( 15 ) NOT NULL ,
PRIMARY KEY (  `cedula` )
) ENGINE = MYISAM ;

CREATE TABLE  `Peluqueria`.`peluqueria` (
 `id_peluqueria` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
 `id_usuario` INT( 11 ) NOT NULL ,
FOREIGN KEY ( id_usuario ) REFERENCES usuario( cedula ) ,
 `nombre` VARCHAR( 40 ) NOT NULL ,
 `telefono1` VARCHAR( 15 ) NOT NULL ,
 `telefono2` VARCHAR( 15 ) NOT NULL ,
 `rnc` INT( 11 ) NOT NULL ,
 `email` VARCHAR( 50 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE  `Peluqueria`.`ubicacion` (
`id_ubicacion` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
 FOREIGN KEY (id_ubicacion) REFERENCES peluqueria(id_peluqueria),
`latitud` FLOAT( 10, 6 ) NOT NULL ,
`longitud` FLOAT( 10, 6 ) NOT NULL ,
`direccion` VARCHAR( 50 ) NOT NULL ,
`zona` VARCHAR( 50 ) NOT NULL ,
`provincia` VARCHAR( 50 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE  `Peluqueria`.`empleados` (
`id_empleado` INT( 11 ) NOT NULL ,
`id_peluqueria` INT NOT NULL,
 FOREIGN KEY (id_peluqueria) REFERENCES peluqueria(id_peluqueria),
 FOREIGN KEY (id_empleado) REFERENCES datos_personales(cedula),
PRIMARY KEY (  `id_empleado` ) 
) ENGINE = MYISAM  ;

CREATE TABLE  `Peluqueria`.`clientes` (
`id_cliente` INT( 11 ) NOT NULL ,
`id_peluqueria` INT NOT NULL,
 FOREIGN KEY (id_peluqueria) REFERENCES peluqueria(id_peluqueria),
 FOREIGN KEY (id_cliente) REFERENCES datos_personales(cedula),
PRIMARY KEY (  `id_cliente` ) 
) ENGINE = MYISAM  ;

CREATE TABLE  `Peluqueria`.`servicios` (
`id_servicios` INT( 11 ) NOT NULL AUTO_INCREMENT,
`id_peluqueria` INT NOT NULL,
 FOREIGN KEY (id_peluqueria) REFERENCES peluqueria(id_peluqueria),
`servicio` VARCHAR( 30 ) NOT NULL,
`precio` FLOAT( 10,6 ) NOT NULL,
PRIMARY KEY (  `id_servicios` ) 
) ENGINE = MYISAM  ;
 
 CREATE TABLE  `Peluqueria`.`factura` (
`id_factura` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`id_peluqueria` INT NOT NULL ,
 FOREIGN KEY (id_peluqueria) REFERENCES peluqueria(id_peluqueria),
`id_cliente` INT( 11 ) NOT NULL ,
 FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
`servicio` VARCHAR( 30 ) NOT NULL ,
`costo` FLOAT( 10, 6 ) NOT NULL ,
`descuento` FLOAT( 10, 6 ) NOT NULL ,
`itbis` FLOAT( 10, 6 ) NOT NULL ,
`total` FLOAT( 10, 6 ) NOT NULL ,
`fecha` DATE NOT NULL
) ENGINE = MYISAM ;



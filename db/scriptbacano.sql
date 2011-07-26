
--
-- Database: `peluqueria`
--
CREATE DATABASE `peluqueria`;
USE `peluqueria`;

-- --------------------------------------------------------
--

-- Table structure for table `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` varchar(11) NOT NULL,
  `id_peluqueria` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=MyISAM;


--
-- Table structure for table `comentarios`
--

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `id_post` varchar(40) NOT NULL,
  `id_usuario` varchar(40) NOT NULL,
  `comentario` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM ;

-- --------------------------------------------------------

--
-- Table structure for table `datos_personales`
--

CREATE TABLE IF NOT EXISTS `datos_personales` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono_local` varchar(15) NULL,
  `telefono_celular` varchar(15) NULL,
  `sexo` varchar(10) NOT NULL,
  `estado_civil` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=MyISAM ;

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` varchar(11) NOT NULL,
  `id_peluqueria` int(11) NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=MyISAM;

-- --------------------------------------------------------

--
-- Table structure for table `factura`
--

CREATE TABLE IF NOT EXISTS `factura` (
  `id_factura` int(11) NOT NULL AUTO_INCREMENT,
  `id_peluqueria` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `servicio` varchar(30) NOT NULL,
  `costo` float(10,6) NOT NULL,
  `descuento` float(10,6) NOT NULL,
  `itbis` float(10,6) NOT NULL,
  `total` float(10,6) NOT NULL,
  `fecha` date NOT NULL,
  `vigencia` char(1) NOT NULL,
  PRIMARY KEY (`id_factura`)
) ENGINE=MyISAM ;
-- --------------------------------------------------------
create procedure registrarfactura(
in idUsuario varchar(11),
in id_cliente varchar(40),
in servicio varchar(15),
in costo float(10,6),
in descuento float(10,6),
in itbis float(10,6),
in total float(10,6),
in fecha date
)

begin
	declare idPeluqueria int(11);
	select id_peluqueria into idPeluqueria from peluqueria where id_usuario = idUsuario;
	
     insert into factura(id_peluqueria,id_cliente,servicio,costo,descuento,etbis,total,fecha,vigencia)
     values(idPeluqueria,id_cliente,servicio,costo,descuento,etbis,total,fecha,"A");     
end;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `detalles` text NOT NULL,
  `posteador` int(40) NOT NULL,
  `photos` text NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

-- --------------------------------------------------------

INSERT INTO `news` (`id`, `titulo`, `detalles`, `posteador`, `photos`, `fecha`) VALUES
(1, 'primer post', 'deatalles del post', 0, 'muchas photos', '0000-00-00'),
(2, 'primer post', 'deatalles del post', 0, 'muchas photos', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `peluqueria`
--

CREATE TABLE IF NOT EXISTS `peluqueria` (
  `id_peluqueria` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `telefono1` varchar(15) NOT NULL,
  `telefono2` varchar(15) NOT NULL,
  `rnc` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fotos` text NOT NULL,
  PRIMARY KEY (`id_peluqueria`)
) ENGINE=MyISAM;

-- --------------------------------------------------------

--
-- Table structure for table `servicios`
--

CREATE TABLE IF NOT EXISTS `servicios` (
  `id_servicios` int(11) NOT NULL AUTO_INCREMENT,
  `id_peluqueria` int(11) NOT NULL,
  `servicio` varchar(30) NOT NULL,
  `precio` float(10,6) NOT NULL,
  PRIMARY KEY (`id_servicios`)

) ENGINE=MyISAM;

-- --------------------------------------------------------

--
-- Table structure for table `ubicacion`
--

CREATE TABLE IF NOT EXISTS `ubicacion` (
  `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_peluqueria` int(11) NOT NULL,
  `latitud` float(10,6) NOT NULL,
  `longitud` float(10,6) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `zona` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=MyISAM;


-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` varchar(11) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `contrasena` varchar(12) NOT NULL,
  `clase` int(1) NOT NULL,
   UNIQUE(nombre_usuario), 
 PRIMARY KEY (`id_usuario`)
  ) ENGINE=MyISAM;

-- ***********************************************
-- Store Procedure
-- ***********************************************

-- registrar un nuevo usuario

create procedure registrarusuario(
in cedula varchar(11),
in nombre varchar(40),
in apellido varchar(40),
in nombre_usuario varchar(20),
in contrasena varchar(12),
in direccion varchar(100),
in telefono_local varchar(15),
in telefono_celular varchar(15),
in sexo varchar(10),
in estado_civil varchar(10),
in email varchar(100),
in clase integer
)
begin
    insert into usuario(id_usuario,nombre_usuario,contrasena,clase)values(cedula,nombre_usuario,contrasena,clase);
    
    insert into datos_personales(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email)
    values(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email);
end;

-- registrar una nueva peluqueria 

create procedure registrarnegocio(
in id_usuario varchar(11),
in nombre varchar(40),
in telefono1 varchar(15),
in telefono2 varchar(15),
in rnc varchar(11),
in email varchar(100),
in fotos text,
in latitud float(10,6),
in longitud float(10,6),
in direccion varchar(50),
in zona varchar(50),
in provincia varchar(50)
)

begin
     declare var int(11);
     insert into peluqueria(id_usuario,nombre,telefono1,telefono2,rnc,email,fotos)
     values(id_usuario,nombre,telefono1,telefono2,rnc,email,fotos);     
	
	 select max(id_peluqueria)  into var from peluqueria;
	 
	
     insert into ubicacion(id_peluqueria,latitud,longitud,direccion,zona,provincia)
     values(var, latitud,longitud,direccion,zona,provincia);
end;

-- registrar clientes

create procedure registrarcliente(
in id_peluqueria int(11),
in cedula varchar(11),
in nombre varchar(40),
in apellido varchar(40),
in direccion varchar(100),
in telefono_local varchar(15),
in telefono_celular varchar(15),
in sexo varchar(10),
in estado_civil varchar(10),
in email varchar(100)
)
begin
     insert into datos_personales(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email)     
     values(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email);     

     insert into clientes(id_cliente,id_peluqueria)values(cedula,id_peluqueria);
end;

-- agregar empleado

create procedure registrarempleado(
in id_peluqueria int(11),
in cedula varchar(11),
in nombre varchar(40),
in apellido varchar(40),
in direccion varchar(100),
in telefono_local varchar(15),
in telefono_celular varchar(15),
in sexo varchar(10),
in estado_civil varchar(10),
in email varchar(100)
)
begin
     insert into datos_personales(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email)     
     values(cedula,nombre,apellido,direccion,telefono_local,telefono_celular,sexo,estado_civil,email);     

     insert into empleados(id_cliente,id_peluqueria)values(cedula,id_peluqueria);
end;

create procedure registrarservicios(
in id_peluqueria int(11),
in servicio varchar(30),
in precio float(10,6)
)
begin
     insert into servicios(id_peluqueria,servicio,precio)values(id_peluqueria,servicio,precio) ;   
end;


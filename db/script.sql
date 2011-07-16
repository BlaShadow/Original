
--
-- Database: `peluqueria`
--
CREATE DATABASE `peluqueria` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `peluqueria`;

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `titulo`, `detalles`, `posteador`, `photos`, `fecha`) VALUES
(1, 'primer post', 'deatalles del post', 0, 'muchas photos', '0000-00-00'),
(2, 'primer post', 'deatalles del post', 0, 'muchas photos', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `ubicaciones`
--

CREATE TABLE IF NOT EXISTS `ubicaciones` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(45) DEFAULT NULL,
  `Clave` varchar(45) DEFAULT NULL,
  `Nombre_Negocio` varchar(45) DEFAULT NULL,
  `Direccion` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Lat` float(10,6) DEFAULT NULL,
  `Lng` float(10,6) DEFAULT NULL,
  `RNC` varchar(45) DEFAULT NULL,
  `Tel` varchar(45) DEFAULT NULL,
  `URL` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Usuario_UNIQUE` (`Usuario`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `ubicaciones`
--

--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
insert into datos_personales values(00103302231,'Eni','Garcia','Jose Reyes esq. Mercedes','809-333-4454','829-555-4244','masculino','casado','eniklkcontigo@hotmail.com');
insert into datos_personales values(00103323456,'Luis','Calderon','Conde Esq. Sanchez','809-323-4774','829-532-4784','pajaro','soltero','eniklkcontigo@hotmail.com');
insert into datos_personales values(30103123456,'Mamas','Guchi','Conde Esq. Santome','809-123-4884','829-534-2184','Gay','soltero','fdecontigo@hotmail.com');
insert into usuario values(00103302231,'eni','1234','usuario');
insert into peluqueria(id_usuario,nombre,telefono1,telefono2,rnc,email) values(00103302231,'Eni BalberShop','809-333-2222','809-332-1123',00103302231,'enipela@gmail.com');
insert into ubicacion(latitud,longitud,direccion,zona,provincia) values(18.47415, -69.88813, 'Jose Reyes esq. Mercedes','Zona Colonial','Santo Domingo');
insert into servicios(id_peluqueria,servicio,precio) values (1,'cerquillo',30.30);
insert into servicios(id_peluqueria,servicio,precio) values (1,'pelada sin cerquillo',50.30);
insert into servicios(id_peluqueria,servicio,precio) values (1,'pelada con cerquillo',100.00);
insert into empleados(id_empleado,id_peluqueria)values(00103323456,1);
insert into clientes (id_cliente,id_peluqueria)values (30103123456,1);


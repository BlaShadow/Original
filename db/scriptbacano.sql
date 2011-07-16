
--
-- Database: `peluqueria`
--
CREATE DATABASE `peluqueria` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `peluqueria`;

-- --------------------------------------------------------
--

-- Table structure for table `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL,
  `id_peluqueria` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `id_peluqueria` (`id_peluqueria`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clientes`
--


-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `id_post` varchar(40) NOT NULL,
  `id_usuario` varchar(40) NOT NULL,
  `comentario` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `comentarios`
--


-- --------------------------------------------------------

--
-- Table structure for table `datos_personales`
--

CREATE TABLE IF NOT EXISTS `datos_personales` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono_local` varchar(15) NOT NULL,
  `telefono_celular` varchar(15) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `estado_civil` varchar(10) NOT NULL,
  `email` varchar(10) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `datos_personales`
--


-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL,
  `id_peluqueria` int(11) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `id_peluqueria` (`id_peluqueria`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleados`
--


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
  PRIMARY KEY (`id_factura`),
  KEY `id_peluqueria` (`id_peluqueria`),
  KEY `id_cliente` (`id_cliente`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `factura`
--


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
-- Table structure for table `peluqueria`
--

CREATE TABLE IF NOT EXISTS `peluqueria` (
  `id_peluqueria` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `telefono1` varchar(15) NOT NULL,
  `telefono2` varchar(15) NOT NULL,
  `rnc` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id_peluqueria`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `peluqueria`
--


-- --------------------------------------------------------

--
-- Table structure for table `servicios`
--

CREATE TABLE IF NOT EXISTS `servicios` (
  `id_servicios` int(11) NOT NULL AUTO_INCREMENT,
  `id_peluqueria` int(11) NOT NULL,
  `servicio` varchar(30) NOT NULL,
  `precio` float(10,6) NOT NULL,
  PRIMARY KEY (`id_servicios`),
  KEY `id_peluqueria` (`id_peluqueria`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `servicios`
--


-- --------------------------------------------------------

--
-- Table structure for table `ubicacion`
--

CREATE TABLE IF NOT EXISTS `ubicacion` (
  `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT,
  `latitud` float(10,6) NOT NULL,
  `longitud` float(10,6) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `zona` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `ubicacion`
--


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


-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `cedula` int(11) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `contrasena` varchar(12) NOT NULL,
  `clase` varchar(15) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

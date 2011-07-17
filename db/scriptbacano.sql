
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
  `id_cliente` int(11) NOT NULL,
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
  `telefono_local` varchar(15) NOT NULL,
  `telefono_celular` varchar(15) NOT NULL,
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
  `id_empleado` int(11) NOT NULL,
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
  PRIMARY KEY (`id_factura`)
) ENGINE=MyISAM ;

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
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `telefono1` varchar(15) NOT NULL,
  `telefono2` varchar(15) NOT NULL,
  `rnc` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
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
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `contrasena` varchar(12) NOT NULL,
  `clase` int(1) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM;


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


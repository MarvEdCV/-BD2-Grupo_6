-- MariaDB dump 10.19  Distrib 10.8.3-MariaDB, for Win64 (AMD64)
--
-- Host: 35.222.99.223    Database: clinica_medica_p1
-- ------------------------------------------------------
-- Server version	8.0.26-google

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `HABITACION`
--

DROP TABLE IF EXISTS `HABITACION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HABITACION` (
  `idHabitacion` int NOT NULL,
  `habitacion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idHabitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HABITACION`
--

LOCK TABLES `HABITACION` WRITE;
/*!40000 ALTER TABLE `HABITACION` DISABLE KEYS */;
INSERT INTO `HABITACION` VALUES
(1,'Sala de examenes 1'),
(2,'Sala de examenes 2'),
(3,'Sala de examenes 3'),
(4,'Sala de examenes 4'),
(5,'Sala de imagenes 1'),
(6,'Sala de procedimientos 1'),
(7,'Sala de procedimientos 2'),
(8,'Sala de procedimientos 3'),
(9,'Sala de procedimientos 4'),
(10,'Recepcion'),
(11,'Laboratorio'),
(12,'Estación de revisión 1'),
(13,'Estación de revisión 2'),
(14,'Estación de revisión 3'),
(15,'Estación de revisión 4');
/*!40000 ALTER TABLE `HABITACION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LOG_ACTIVIDAD`
--

DROP TABLE IF EXISTS `LOG_ACTIVIDAD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LOG_ACTIVIDAD` (
  `id_log_actividad` int NOT NULL,
  `timestampx` varchar(100) NOT NULL,
  `actividad` varchar(500) NOT NULL,
  `PACIENTE_idPaciente` int NOT NULL,
  `HABITACION_idHabitacion` int NOT NULL,
  PRIMARY KEY (`id_log_actividad`),
  KEY `LOG_ACTIVIDAD_HABITACION_null_fk` (`HABITACION_idHabitacion`),
  KEY `LOG_ACTIVIDAD_PACIENTE_null_fk` (`PACIENTE_idPaciente`),
  CONSTRAINT `LOG_ACTIVIDAD_HABITACION_null_fk` FOREIGN KEY (`HABITACION_idHabitacion`) REFERENCES `HABITACION` (`idHabitacion`),
  CONSTRAINT `LOG_ACTIVIDAD_PACIENTE_null_fk` FOREIGN KEY (`PACIENTE_idPaciente`) REFERENCES `PACIENTE` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LOG_ACTIVIDAD`
--

LOCK TABLES `LOG_ACTIVIDAD` WRITE;
/*!40000 ALTER TABLE `LOG_ACTIVIDAD` DISABLE KEYS */;
/*!40000 ALTER TABLE `LOG_ACTIVIDAD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LOG_HABITACION`
--

DROP TABLE IF EXISTS `LOG_HABITACION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LOG_HABITACION` (
  `timestampx` varchar(100) NOT NULL,
  `statusx` varchar(45) NOT NULL,
  `idHabitacion` int DEFAULT NULL,
  PRIMARY KEY (`timestampx`),
  KEY `LOG_HABITACION_HABITACION_idHabitacion_fk` (`idHabitacion`),
  CONSTRAINT `LOG_HABITACION_HABITACION_idHabitacion_fk` FOREIGN KEY (`idHabitacion`) REFERENCES `HABITACION` (`idHabitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LOG_HABITACION`
--

LOCK TABLES `LOG_HABITACION` WRITE;
/*!40000 ALTER TABLE `LOG_HABITACION` DISABLE KEYS */;
/*!40000 ALTER TABLE `LOG_HABITACION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PACIENTE`
--

DROP TABLE IF EXISTS `PACIENTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PACIENTE` (
  `idPaciente` int NOT NULL,
  `edad` int NOT NULL,
  `genero` varchar(20) NOT NULL,
  PRIMARY KEY (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PACIENTE`
--

LOCK TABLES `PACIENTE` WRITE;
/*!40000 ALTER TABLE `PACIENTE` DISABLE KEYS */;
/*!40000 ALTER TABLE `PACIENTE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-07 18:40:51

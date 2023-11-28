-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: cava_real
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (1,'material',3),(2,'detail',3),(3,'vineyard',1),(4,'age',1),(5,'altitude',1),(6,'variety',1),(7,'barrels',1),(8,'saved',1),(9,'fruity',1),(10,'nothing',1),(11,'dry',1),(12,'kind',1),(13,'velvety',1),(14,'light',1),(15,'delicate',1),(16,'size',2),(18,'cutting',2),(19,'producer',2),(20,'elaboration',2),(21,'type',2);
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories_products`
--

LOCK TABLES `categories_products` WRITE;
/*!40000 ALTER TABLE `categories_products` DISABLE KEYS */;
INSERT INTO `categories_products` VALUES (1,'Vinos'),(2,'Licores'),(3,'Accesorios');
/*!40000 ALTER TABLE `categories_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories_users`
--

LOCK TABLES `categories_users` WRITE;
/*!40000 ALTER TABLE `categories_users` DISABLE KEYS */;
INSERT INTO `categories_users` VALUES (1,'Cliente'),(2,'Administrador');
/*!40000 ALTER TABLE `categories_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `detail_products`
--

LOCK TABLES `detail_products` WRITE;
/*!40000 ALTER TABLE `detail_products` DISABLE KEYS */;
INSERT INTO `detail_products` VALUES (1,20,1,'Cristal fino'),(2,20,2,'Apto para lavavajillas, diseño elegante'),(3,21,1,'Acero inoxidable y plástico resistente'),(4,21,2,'Funciona con todas las botellas de vino estándar'),(5,22,2,'Fácil de limpiar y usar'),(6,23,1,'Silicona de grado alimenticio'),(7,23,2,'Aptos para lavavajillas, herméticos y resistentes al aire'),(8,24,1,'Acrílico y silicona'),(9,24,2,'Diseño compacto, fácil de usar'),(10,25,2,'Diseño elegante, mantiene el vino frío durante horas.'),(11,26,2,'Pantalla LCD, fácil de usar.'),(12,27,2,'Presentado en una caja de regalo de lujo'),(13,28,2,'Se adhieren al tallo de la copa de manera segura y son aptos para lavavajillas'),(14,1,3,'Las Compuertas, Agrelo, Gualtallary y Altamira'),(15,1,4,'21'),(16,1,5,'Las Compuertas y Agrelo 1050 metros, Gualtallary 1230 metros y Altamira 1080 metros'),(17,1,6,'Cabernet Sauvignon'),(18,1,7,'10'),(19,1,8,'20'),(20,1,9,'43'),(21,1,10,'88'),(22,1,11,'7'),(23,1,12,'67'),(24,1,13,'30'),(25,1,14,'54'),(26,1,15,'100'),(27,2,3,'Las Compuertas y Agrelo'),(28,2,4,'17'),(29,2,5,'Las Compuertas 1050, Agrelo 1050'),(30,2,6,'Blend'),(31,2,7,'12'),(32,2,8,'12'),(33,2,9,'81'),(34,2,10,'62'),(35,2,11,'18'),(36,2,12,'15'),(37,2,13,'23'),(38,2,14,'90'),(39,2,15,'95'),(40,3,3,'Luigi Bosca'),(41,3,4,'10'),(42,3,5,'1.150'),(43,3,6,'Malbec'),(44,3,7,'1'),(45,3,8,'6'),(46,3,9,'45'),(47,3,10,'20'),(48,3,11,'30'),(49,3,12,'20'),(50,3,13,'66'),(51,3,14,'80'),(52,3,15,'86'),(53,4,3,'Luigi Bosca'),(54,4,4,'10'),(55,4,5,'1.150 metros'),(56,4,6,'Cabernet Sauvignon'),(57,4,7,'12'),(58,4,8,'7'),(59,4,9,'80'),(60,4,10,'12'),(61,4,11,'26'),(62,4,12,'33'),(63,4,13,'48'),(64,4,14,'67'),(65,4,15,'72'),(66,5,3,'Finca el Paraiso'),(67,5,4,'25'),(68,5,5,'780 metros'),(69,5,6,'Cabernet Franc'),(70,5,7,'10'),(71,5,8,'12'),(72,5,9,'60'),(73,5,1,'18'),(74,5,11,'12'),(75,5,12,'62'),(76,5,13,'33'),(77,5,14,'78'),(78,5,15,'71'),(79,6,3,'Luigi Bosca'),(80,6,4,'10'),(81,6,5,'1.150 metros'),(82,6,6,'Torrontes'),(83,6,7,'0'),(84,6,8,'2'),(85,6,9,'30'),(86,6,10,'11'),(87,6,11,'20'),(88,6,12,'99'),(89,6,13,'55'),(90,6,14,'39'),(91,6,15,'28'),(92,7,3,'Elaborado con uvas de vinedos propios situados en Luján de Cuyo y Valle de Uco.'),(93,7,4,'20'),(94,7,5,'900 a 1.200 metros'),(95,7,6,'Chardonnay'),(96,7,7,'2'),(97,7,8,'3'),(98,7,9,'36'),(99,7,10,'23'),(100,7,11,'32'),(101,7,12,'86'),(102,7,13,'59'),(103,7,14,'60'),(104,7,15,'54'),(105,8,3,'Elaborado con uvas de vinedos situados en Luján de Cuyo.'),(106,8,4,'30'),(107,8,5,'960 metros promedio'),(108,8,6,'Malbec'),(109,8,7,'12'),(110,8,8,'2'),(111,8,9,'10'),(112,8,10,'12'),(113,8,11,'30'),(114,8,12,'60'),(115,8,13,'22'),(116,8,14,'10'),(117,8,15,'50'),(118,9,3,'Las Compuertas, Vistalba y Agrelo'),(119,9,4,'70 años'),(120,9,5,'960 metros'),(121,9,6,'Malbec'),(122,9,7,'12'),(123,9,8,'10'),(124,9,9,'22'),(125,9,10,'53'),(126,9,11,'12'),(127,9,12,'10'),(128,9,13,'45'),(129,9,14,'74'),(130,9,15,'83'),(131,10,16,'750ml'),(132,10,18,'Blended Scotch Whisky'),(133,10,19,'Johnnie Walker'),(134,10,20,'Escocia'),(135,10,21,'Blended'),(136,11,16,'750ml'),(137,11,18,'Blended Scotch Whisky'),(138,11,19,'Johnnie Walker'),(139,11,20,'Escocia'),(140,11,21,'Blended'),(141,12,16,'750ml'),(142,12,18,'Single Malt Scotch Whisky'),(143,12,19,'Talisker'),(144,12,20,'Isla de Skye, Escocia.'),(145,12,21,'Single Malt'),(146,13,16,'750ml'),(147,13,18,'Blended Scotch Whisky'),(148,13,19,'J&B'),(149,13,20,'Speyside. Escocia.'),(150,13,21,'Blended'),(151,14,16,'750ml'),(152,14,18,'Blended Scotch Whisky'),(153,14,19,'Old Parr'),(154,14,20,'Speyside, Escocia.'),(155,14,21,'Blended'),(156,15,16,'1L'),(157,15,18,'Licor de hierbas'),(158,15,19,'Jagermeister'),(159,15,20,'Alemania'),(160,15,21,'Licor'),(161,16,16,'700ml'),(162,16,18,'Licor'),(163,16,19,'Strega'),(164,16,20,'Italia'),(165,16,21,'Licor'),(166,17,16,'750ml'),(167,17,18,'Licor de marula con crema'),(168,17,19,'Amarula'),(169,17,20,'Stellenbosch, Sudáfrica.'),(170,17,21,'Licor'),(171,18,16,'750ml'),(172,18,18,'Blended Scotch Whisky'),(173,18,19,'White Horse'),(174,18,20,'Escocia'),(175,18,21,'Blended'),(176,19,16,'750ml'),(177,19,18,'Destilados'),(178,19,19,'Tres Plumas'),(179,19,20,'Buenos Aires. Argentina'),(180,19,21,'Destilados');
/*!40000 ALTER TABLE `detail_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'DE SANGRE· Cabernet Sauvignon','       Luigi Bosca De Sangre Cabernet Sauvignon es un tinto de color rojo profundo. ...',10001,'product1.png',1,NULL),(2,'DE SANGRE · Red Blend','LUIGI BOSCA DE SANGRE · Red Blend es un tinto rojo granate brillante con aromas muy atractivos ...',7560,'product2.png',1,NULL),(3,'La Linda Malbec · 750 ml','La Linda · Malbec es un tinto de color rojo violáceo brillante, de aromas muy expresivos ...',3001,'product3.webp',1,NULL),(4,'LUIGI BOSCA · Cabernet Sauvignon','Luigi Bosca Cabernet Sauvignon es un tinto de color rojo rubí profundo y brillante. ...',5898,'product4.png',1,NULL),(5,'DE SANGRE · Cabernet Franc','Luigi Bosca De Sangre· Cabernet Franc es un tinto de color rojo granate oscuro y profundo. ...',9826,'product5.png',1,NULL),(6,'La Linda Torrontes · 750 ml','La Linda · Torrontes es un blanco de color amarillo claro y brillante. ...',3049,'product6.png',1,NULL),(7,'LUIGI BOSCA . Chardonnay uwu',' Luigi Bosca Chardonnay es un blanco de color amarillo brillante. ...',4900,'product7.png',1,NULL),(8,'LA LINDA . Rose Malbec','Un rosado de aspecto palido y brillante, de aromas frescos y expresivos ...',9898,'product8.png',1,NULL),(9,'DE SANGRE . Malbec D.O.C','Cava Real De Sangre - Malbec D.O.C es uno de los primeros vinos argentinos con Denominación de Origen. ...',10676,'product9.png',1,NULL),(10,'Johnnie Walker Red Label','El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. ...',17231,'JohnnieWalkerRedLabel.png',2,NULL),(11,'Johnnie Walker Double Black Label','Nariz llena de humo, especias inconfundibles y ligeros tonos de frutos secos. ...',40771,'doublebalcklabel.png',2,NULL),(12,'Talisker','Color: Oro brillante. Aroma: Potente turba de humo con toques de agua de mar salado, ...',90873,'Talisker.png',2,NULL),(13,'J&B Rare','De color dorado. En nariz es limpio, ligero y fresco, con un toque de hojas verdes y flores, ...',17231,'J&BRare.png',2,NULL),(14,'Old Parr De Luxe','El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. ...',26107,'OldParrDeLuxe.png',2,NULL),(15,'Jagermeister Manifest','Tiene notas dulces a anís estrellado, fruta seca, jengibre, canela en rama, ...',59620,'JagermeisterManifest.png',2,NULL),(16,'Strega Limoncello','Un equilibrio perfecto entre sabor y aroma: el hábil método de infusión de las cáscaras de limón ...',29560,'StregaLimoncello.png',2,NULL),(17,'Amarula','Color: Marrón claro. En paladar: Sabor dulce de marula y suave de la crema.',20454,'Amarula.png',2,NULL),(18,'White Horse','Nariz: Buen equilibrio y complejidad, con notas de roble, humo y caramelo. ...',5988,'WhiteHorse.png',2,NULL),(19,'Tres Plumas Frutilla','Destilado natural de frutillas maduras seleccionadas, nuestro maestro licorista eligió un perfil cremoso, ...',1936,'TresPlumasFrutilla.png',2,NULL),(20,'Copas de Vino','Juego de copas de vino de alta calidad, ideales para realzar la experiencia de degustación de vinos. Incluye copas tintas, blancas y flautas.',50,NULL,3,NULL),(21,'Sacacorchos','Sacacorchos de palanca con diseño ergonómico para abrir fácilmente las botellas de vino. Incluye cortador de cápsulas y sacacorchos adicional.',30,NULL,3,NULL),(22,'Decantador de Vino','Decantador de vidrio soplado a mano con forma elegante para mejorar la aireación y el sabor del vino.',40,NULL,3,NULL),(23,'Tapones para Botellas de Vino','Tapones de silicona reutilizables para mantener el vino fresco después de abrir una botella.',10,NULL,3,NULL),(24,'Aireadores de Vino','Aireador de vino de bolsillo que mejora instantáneamente el sabor y el aroma del vino al verterlo en la copa.',15,NULL,3,NULL),(25,'Cubiteras y Enfriadores de Vino','Cubitera de acero inoxidable con enfriador de vino integrado para mantener el vino a la temperatura perfecta.',35,NULL,3,NULL),(26,'Termómetros para Vinos','Termómetro digital que muestra la temperatura exacta del vino para servirlo en su punto óptimo (rango temperatura: -9°C a 70°C)',20,NULL,3,NULL),(27,'Sets de Regalo para Amantes del Vino','Un set completo que incluye una botella de vino premium, copas de vino y otros accesorios elegantes (1 botella de vino, 2 copas, sacacorchos y tapones).',80,NULL,3,NULL),(28,'Marcadores de Copas de Vino','Conjunto de marcadores de copas de vino reutilizables y coloridos para que tus invitados identifiquen sus copas fácilmente en reuniones (12 unidades).',13,NULL,3,NULL),(39,'Sacacorcho Premium',' Sacacorcho de la mas alta calidad',1500,'img-1700534012600.png',3,NULL),(40,'Aireador de Vinos','   Se exalta el sabor y el aroma del vino. ambas caracteristicas pudieron ser afectadas por la botella, condiciones climaticas e incluso tiempo de maduracion. cuando el vino se somete a este proceso, se puede descubrir su verdadero aroma y sabor.\r\n- el procedimiento se hace en cuestion de segundos. Se logra los mismos resultados que un decantador, pero en mucho menor tiempo.\r\n-El filtro que posee ayuda a separar los sedimentos del vino.\r\n- Son dispositivos muy faciles de trasladar gracias a su dimension. ',1350,'img-1700592084284.png',3,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_cart`
--

LOCK TABLES `products_cart` WRITE;
/*!40000 ALTER TABLE `products_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Doe','john@example.com','password123',123456789,'1990-01-01','123 Main St','12345','California','john.jpg',0,'Básico',1,'raulito'),(2,'Jane','Doe','jane@example.com','password456',987654321,'1992-05-15','456 Oak St','67890','Nueva York','jane.jpg',0,'Oro',1,'raulito23'),(3,'Mike','Smith','mike@example.com','password789',555555555,'1985-08-22','789 Pine St','45678','Texas','mike.jpg',0,'Plata',1,'raulito33123'),(4,'Emily','Johnson','emily@example.com','passwordabc',333333333,'1988-11-10','567 Cedar St','89012','Florida','emily.jpg',0,'Platino',1,'123123'),(5,'Juan','González','juan@example.com','password123',1234567890,'1990-05-15','Calle Principal 123','12345','Ciudad','perfil1.jpg',0,'Oro',1,'asdddd'),(6,'María','López','maria@example.com','pass456',9876543210,'1985-08-22','Avenida Central 456','54321','Pueblo','perfil2.jpg',0,'Plata',1,'carlitos'),(7,'Pedro','Martínez','pedro@example.com','pass789',5554443333,'1992-02-10','Plaza Mayor 789','67890','Villa','perfil3.jpg',0,'Bronce',1,'facufacu'),(8,'John','Doe','john@example.com','password123',123456789,'1990-01-01','123 Main St','12345','California','john.jpg',0,'Básico',1,'raulito'),(9,'Jane','Doe','jane@example.com','password456',987654321,'1992-05-15','456 Oak St','67890','Nueva York','jane.jpg',0,'Oro',1,'raulito23'),(10,'Mike','Smith','mike@example.com','password789',555555555,'1985-08-22','789 Pine St','45678','Texas','mike.jpg',0,'Plata',1,'raulito33123'),(11,'Emily','Johnson','emily@example.com','passwordabc',333333333,'1988-11-10','567 Cedar St','89012','Florida','emily.jpg',0,'Platino',1,'123123'),(12,'Juan','González','juan@example.com','password123',1234567890,'1990-05-15','Calle Principal 123','12345','Ciudad','perfil1.jpg',0,'Oro',1,'asdddd'),(13,'María','López','maria@example.com','pass456',9876543210,'1985-08-22','Avenida Central 456','54321','Pueblo','perfil2.jpg',0,'Plata',1,'carlitos'),(14,'Pedro','Martínez','pedro@example.com','pass789',5554443333,'1992-02-10','Plaza Mayor 789','67890','Villa','perfil3.jpg',0,'Bronce',1,'facufacu'),(15,'John','Doe','john@example.com','password123',123456789,'1990-01-01','123 Main St','12345','California','john.jpg',0,'Básico',1,'raulito'),(16,'Jane','Doe','jane@example.com','password456',987654321,'1992-05-15','456 Oak St','67890','Nueva York','jane.jpg',0,'Oro',1,'raulito23'),(17,'Mike','Smith','mike@example.com','password789',555555555,'1985-08-22','789 Pine St','45678','Texas','mike.jpg',0,'Plata',1,'raulito33123'),(18,'Emily','Johnson','emily@example.com','passwordabc',333333333,'1988-11-10','567 Cedar St','89012','Florida','emily.jpg',0,'Platino',1,'123123'),(19,'Juan','González','juan@example.com','password123',1234567890,'1990-05-15','Calle Principal 123','12345','Ciudad','perfil1.jpg',0,'Oro',1,'asdddd'),(20,'María','López','maria@example.com','pass456',9876543210,'1985-08-22','Avenida Central 456','54321','Pueblo','perfil2.jpg',0,'Plata',1,'carlitos'),(21,'Pedro','Martínez','pedro@example.com','pass789',5554443333,'1992-02-10','Plaza Mayor 789','67890','Villa','perfil3.jpg',0,'Bronce',1,'facufacu'),(22,'John','Doe','john@example.com','password123',123456789,'1990-01-01','123 Main St','12345','California','john.jpg',0,'Básico',1,'raulito'),(23,'Jane','Doe','jane@example.com','password456',987654321,'1992-05-15','456 Oak St','67890','Nueva York','jane.jpg',0,'Oro',1,'raulito23'),(24,'Mike','Smith','mike@example.com','password789',555555555,'1985-08-22','789 Pine St','45678','Texas','mike.jpg',0,'Plata',1,'raulito33123'),(25,'Emily','Johnson','emily@example.com','passwordabc',333333333,'1988-11-10','567 Cedar St','89012','Florida','emily.jpg',0,'Platino',1,'123123'),(26,'Juan','González','juan@example.com','password123',1234567890,'1990-05-15','Calle Principal 123','12345','Ciudad','perfil1.jpg',0,'Oro',1,'asdddd'),(27,'María','López','maria@example.com','pass456',9876543210,'1985-08-22','Avenida Central 456','54321','Pueblo','perfil2.jpg',0,'Plata',1,'carlitos'),(28,'Pedro','Martínez','pedro@example.com','pass789',5554443333,'1992-02-10','Plaza Mayor 789','67890','Villa','perfil3.jpg',0,'Bronce',1,'facufacu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_products`
--

LOCK TABLES `users_products` WRITE;
/*!40000 ALTER TABLE `users_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 15:39:09

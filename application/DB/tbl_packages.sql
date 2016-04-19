/*
SQLyog Enterprise - MySQL GUI v7.12 
MySQL - 5.6.17 : Database - datagrid
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`datagrid` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `datagrid`;

/*Table structure for table `tbl_packages` */

DROP TABLE IF EXISTS `tbl_packages`;

CREATE TABLE `tbl_packages` (
  `pkg_id` int(11) NOT NULL AUTO_INCREMENT,
  `pkg_awb` int(11) DEFAULT NULL,
  `pkg_origin` varchar(100) DEFAULT NULL,
  `pkg_destination` varchar(100) DEFAULT NULL,
  `pkg_consignee` varchar(100) DEFAULT NULL,
  `pkg_weight` varchar(50) DEFAULT NULL,
  UNIQUE KEY `pkg_id` (`pkg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_packages` */

insert  into `tbl_packages`(`pkg_id`,`pkg_awb`,`pkg_origin`,`pkg_destination`,`pkg_consignee`,`pkg_weight`) values (1,100,'DXB','SHJ','TSS','250kg'),(2,120,'DXB','CCJ','TSS','200g'),(3,102,'CCJ','SHJ','Nishad','200'),(4,203,'CCJ','SHJ','Nishad','200g'),(5,205,'COK','CCJ','Asif','200kg'),(6,208,'COK','DXB','Nishad','150g'),(7,121,'CCJ','COK','Ajmal','200g');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

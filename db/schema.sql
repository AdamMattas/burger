/* Create and use the burgers db */
CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255 ) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,
  `date` TIMESTAMP DEFAULT now(),

  PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
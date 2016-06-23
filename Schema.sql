CREATE DATABASE `football-finder`;
USE `football-finder`;

CREATE TABLE `players` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	`playerName` VARCHAR(50) NOT NULL UNIQUE,
  `teamName` VARCHAR(60) NOT NULL,
	`postion` VARCHAR(30) NOT NULL,
	`yardsLastYear` INT(5) NOT NULL,
	`yearsInLeague` Int(4) NOT NULL,
	`totalLastYearTd` Int(3) NOT NULL,
 );

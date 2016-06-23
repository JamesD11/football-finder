CREATE DATABASE `football-finder`;
USE `football-finder`;

CREATE TABLE `players` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	`playerName` VARCHAR(50) NOT NULL,
  `teamName` VARCHAR(60) NOT NULL,
	`postion` VARCHAR(30) NOT NULL,
	`yardsLastYear` INT(5) NOT NULL,
	`yearsInLeague` Int(4) NOT NULL,
	`totalLastYearTd` Int(3) NOT NULL,
 );

/* considered making playerName UNIQUE but there's a slim possibility of multiple players
w same last name. Also considered CHECK(yearsInLeague>0) and CHECK(totalLastYearTd>0)
as constraints since those values should always be 1 or greater*/

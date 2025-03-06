CREATE TABLE `idiomas` (
	`codigo` INT(11) NOT NULL AUTO_INCREMENT,
	`idioma` VARCHAR(30) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_uca1400_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_uca1400_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=8
;


INSERT INTO `idiomas` (`codigo`, `idioma`) VALUES
(1, 'Inglés'),
(2, 'Español'),
(3, 'Francés'),
(4, 'Alemán'),
(5, 'Italiano');
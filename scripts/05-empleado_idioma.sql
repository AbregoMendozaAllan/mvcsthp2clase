CREATE TABLE `empleado_idioma` (
	`codigo_empleado` INT(11) NOT NULL,
	`codigo_idioma` INT(11) NOT NULL,
	`fecha` DATE NULL DEFAULT NULL,
	PRIMARY KEY (`codigo_empleado`, `codigo_idioma`) USING BTREE,
	INDEX `FK__empleados` (`codigo_empleado`) USING BTREE,
	INDEX `FK__idiomas` (`codigo_idioma`) USING BTREE,
	CONSTRAINT `FK__empleados` FOREIGN KEY (`codigo_empleado`) REFERENCES `empleados` (`codigo`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `FK__idiomas` FOREIGN KEY (`codigo_idioma`) REFERENCES `idiomas` (`codigo`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_uca1400_ai_ci'
ENGINE=InnoDB
;

INSERT INTO `empleado_idioma` (`codigo_empleado`, `codigo_idioma`, `fecha`) VALUES
(1, 1, '2021-08-10'),
(1, 2, '2020-06-15'),
(2, 1, '2019-04-20'),
(2, 3, '2020-05-10'),
(3, 2, '2021-09-30'),
(3, 4, '2022-02-12'),
(4, 1, '2018-12-10'),
(4, 5, '2019-06-25');
CREATE TABLE `empleados` (
	`codigo` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`apellido` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`fecha_contratacion` DATE NOT NULL,
	`sueldo` DECIMAL(20,6) NOT NULL DEFAULT '0.000000',
	`telefono` VARCHAR(30) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_uca1400_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_uca1400_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=9
;

INSERT INTO `empleados` (`codigo`, `nombre`, `apellido`, `fecha_contratacion`, `sueldo`, `telefono`) VALUES
(1, 'Luis', 'Fernandez', '2020-06-15', 2500.500000, '600123456'),
(2, 'Elena', 'Diaz', '2019-03-10', 3200.750000, '601654321'),
(3, 'Miguel', 'Ramirez', '2021-07-25', 2800.000000, '602987654'),
(4, 'Sofia', 'Hernandez', '2018-12-05', 3500.250000, '603456789');
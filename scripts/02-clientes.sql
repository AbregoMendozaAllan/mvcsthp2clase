CREATE TABLE `clientes` (
	`codigo` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`apellido` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`edad` INT(11) NULL DEFAULT NULL,
	`telefono` VARCHAR(8) NULL DEFAULT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`ciudad` VARCHAR(30) NULL DEFAULT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_uca1400_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=16
;

INSERT INTO `clientes` (`codigo`, `nombre`, `apellido`, `edad`, `telefono`, `ciudad`) VALUES
(1, 'Juan', 'Perez', 30, '12345678', 'Madrid'),
(2, 'Maria', 'Gonzalez', 25, '87654321', 'Barcelona'),
(3, 'Carlos', 'Lopez', 40, '11223344', 'Sevilla'),
(4, 'Ana', 'Martinez', 35, '44332211', 'Valencia');
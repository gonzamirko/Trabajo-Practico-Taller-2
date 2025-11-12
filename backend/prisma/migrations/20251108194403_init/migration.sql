-- CreateTable
CREATE TABLE `producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `clasificacion` VARCHAR(100) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `rutaImagen` VARCHAR(255) NOT NULL,
    `stock` INTEGER NULL,
    `color` VARCHAR(255) NOT NULL,
    `talle` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

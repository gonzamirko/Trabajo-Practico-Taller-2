-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `contrasenia` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(200) NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE producto(
    id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    clasificacion VARCHAR(100) NOT NULL,
    precio DOUBLE NOT NULL,
    rutaImagen VARCHAR(255) NOT NULL,
    stock INT,
    color VARCHAR(255) NOT NULL,
    talle INT NOT NULL
);

/*
  Warnings:

  - You are about to drop the column `password` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `contrasenia` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `precio` FLOAT NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `password`,
    ADD COLUMN `contrasenia` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `carrito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProducto` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    INDEX `idProducto`(`idProducto`),
    INDEX `idUsuario`(`idUsuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carrito` ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carrito` ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RedefineIndex
CREATE UNIQUE INDEX `email` ON `usuario`(`email`);
DROP INDEX `usuario_email_key` ON `usuario`;

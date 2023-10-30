/*
  Warnings:

  - A unique constraint covering the columns `[correo]` on the table `Proveedores` will be added. If there are existing duplicate values, this will fail.
  - Made the column `cantidad` on table `Detalle_venta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `precio_neto` on table `Detalle_venta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `precio_total_neto` on table `Detalle_venta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `peso_gramos` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `precio_neto` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rut` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giro` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telefono` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `correo` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pagina_web` on table `Proveedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `Venta` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Detalle_venta` MODIFY `cantidad` INTEGER NOT NULL,
    MODIFY `precio_neto` INTEGER NOT NULL,
    MODIFY `precio_total_neto` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Productos` MODIFY `descripcion` VARCHAR(45) NOT NULL,
    MODIFY `peso_gramos` INTEGER NOT NULL,
    MODIFY `precio_neto` INTEGER NOT NULL,
    MODIFY `stock` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Proveedores` MODIFY `rut` INTEGER NOT NULL,
    MODIFY `giro` INTEGER NOT NULL,
    MODIFY `nombre` VARCHAR(45) NOT NULL,
    MODIFY `telefono` VARCHAR(191) NOT NULL,
    MODIFY `correo` VARCHAR(45) NOT NULL,
    MODIFY `pagina_web` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `Venta` MODIFY `total` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proveedores_correo_key` ON `Proveedores`(`correo`);

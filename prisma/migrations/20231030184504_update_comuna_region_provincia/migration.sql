/*
  Warnings:

  - The primary key for the `Comunas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Provincias_id` on the `Comunas` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Comunas` table. All the data in the column will be lost.
  - The primary key for the `Provincias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Regiones_id` on the `Provincias` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Provincias` table. All the data in the column will be lost.
  - You are about to drop the column `provincia` on the `Provincias` table. All the data in the column will be lost.
  - The primary key for the `Regiones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Regiones` table. All the data in the column will be lost.
  - You are about to drop the column `numeracion` on the `Regiones` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `Regiones` table. All the data in the column will be lost.
  - Added the required column `id_comuna` to the `Comunas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provincia_id` to the `Comunas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_provincia` to the `Provincias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Provincias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region_id` to the `Provincias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_region` to the `Regiones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Regiones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordinal` to the `Regiones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Comunas` DROP FOREIGN KEY `Comunas_Provincias_id_fkey`;

-- DropForeignKey
ALTER TABLE `Direcciones` DROP FOREIGN KEY `Direcciones_Comunas_id_fkey`;

-- DropForeignKey
ALTER TABLE `Provincias` DROP FOREIGN KEY `Provincias_Regiones_id_fkey`;

-- AlterTable
ALTER TABLE `Comunas` DROP PRIMARY KEY,
    DROP COLUMN `Provincias_id`,
    DROP COLUMN `id`,
    ADD COLUMN `id_comuna` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `provincia_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_comuna`);

-- AlterTable
ALTER TABLE `Provincias` DROP PRIMARY KEY,
    DROP COLUMN `Regiones_id`,
    DROP COLUMN `id`,
    DROP COLUMN `provincia`,
    ADD COLUMN `id_provincia` INTEGER NOT NULL,
    ADD COLUMN `nombre` VARCHAR(64) NOT NULL,
    ADD COLUMN `region_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_provincia`);

-- AlterTable
ALTER TABLE `Regiones` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `numeracion`,
    DROP COLUMN `region`,
    ADD COLUMN `id_region` INTEGER NOT NULL,
    ADD COLUMN `nombre` VARCHAR(64) NOT NULL,
    ADD COLUMN `ordinal` VARCHAR(4) NOT NULL,
    ADD PRIMARY KEY (`id_region`);

-- AddForeignKey
ALTER TABLE `Comunas` ADD CONSTRAINT `Comunas_provincia_id_fkey` FOREIGN KEY (`provincia_id`) REFERENCES `Provincias`(`id_provincia`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones` ADD CONSTRAINT `Direcciones_Comunas_id_fkey` FOREIGN KEY (`Comunas_id`) REFERENCES `Comunas`(`id_comuna`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincias` ADD CONSTRAINT `Provincias_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `Regiones`(`id_region`) ON DELETE RESTRICT ON UPDATE CASCADE;

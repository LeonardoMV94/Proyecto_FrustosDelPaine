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

*/-- DropForeignKey
-- Eliminar la restricción de clave foránea en la tabla Comunas
-- Eliminar la restricción de clave foránea en la tabla Comunas
ALTER TABLE Comunas DROP FOREIGN KEY Comunas_provincia_id_fkey;

-- Eliminar la restricción de clave foránea en la tabla Direcciones
ALTER TABLE Direcciones DROP FOREIGN KEY Direcciones_Comunas_id_fkey;

-- Eliminar la restricción de clave foránea en la tabla Provincias
ALTER TABLE Provincias DROP FOREIGN KEY Provincias_region_id_fkey;

-- Modificar la tabla Comunas (MySQL)
ALTER TABLE Comunas
    DROP PRIMARY KEY,
    DROP COLUMN provincia_id,
    DROP COLUMN id_comuna,
    ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY,
    ADD COLUMN Provincias_id INT NOT NULL,
    ADD PRIMARY KEY (id);

-- Modificar la tabla Provincias (MySQL)
ALTER TABLE Provincias
    DROP PRIMARY KEY,
    DROP COLUMN region_id,
    DROP COLUMN id_provincia,
    DROP COLUMN nombre,
    ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY,
    ADD COLUMN provincia VARCHAR(64) NOT NULL,
    ADD COLUMN Regiones_id INT NOT NULL,
    ADD PRIMARY KEY (id);

-- Modificar la tabla Regiones (MySQL)
ALTER TABLE Regiones
    DROP PRIMARY KEY,
    DROP COLUMN id_region,
    DROP COLUMN nombre,
    DROP COLUMN ordinal,
    ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY,
    ADD COLUMN region VARCHAR(64) NOT NULL,
    ADD COLUMN numeracion VARCHAR(4) NOT NULL,
    ADD PRIMARY KEY (id);

-- Añadir clave foránea a la tabla Comunas
ALTER TABLE Comunas ADD CONSTRAINT Comunas_Provincias_id_fkey FOREIGN KEY (Provincias_id) REFERENCES Provincias(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Añadir clave foránea a la tabla Direcciones
ALTER TABLE Direcciones ADD CONSTRAINT Direcciones_Comunas_id_fkey FOREIGN KEY (Comunas_id) REFERENCES Comunas(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Añadir clave foránea a la tabla Provincias
ALTER TABLE Provincias ADD CONSTRAINT Provincias_Regiones_id_fkey FOREIGN KEY (Regiones_id) REFERENCES Regiones(id) ON DELETE RESTRICT ON UPDATE CASCADE;

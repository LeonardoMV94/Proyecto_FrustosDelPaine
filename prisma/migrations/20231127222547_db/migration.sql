/*
  Warnings:

  - You are about to alter the column `ultimo_login` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Usuarios` MODIFY `ultimo_login` TIMESTAMP(3) NULL;


-- CreateTable
CREATE TABLE `Categorias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rut` VARCHAR(45) NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `apellido` VARCHAR(45) NOT NULL,
    `correo` VARCHAR(45) NOT NULL,
    `celular` VARCHAR(45) NOT NULL,
    `direccion_id` INTEGER NOT NULL,

    UNIQUE INDEX `Clientes_correo_key`(`correo`),
    UNIQUE INDEX `Clientes_celular_key`(`celular`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colaboradores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombres` VARCHAR(45) NOT NULL,
    `apellidos` VARCHAR(45) NOT NULL,
    `direccion_id` INTEGER NOT NULL,
    `correo` VARCHAR(45) NOT NULL,
    `celular` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `Colaboradores_correo_key`(`correo`),
    UNIQUE INDEX `Colaboradores_celular_key`(`celular`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `Proveedores_id` INTEGER NOT NULL,
    `total_neto` INTEGER NOT NULL,
    `iva` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `Usuarios_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comunas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comuna` VARCHAR(45) NOT NULL,
    `Provincias_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_Compras` (
    `Compras_id` INTEGER NOT NULL,
    `Productos_id` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `valor_neto` DOUBLE NOT NULL,
    `total_neto` DOUBLE NOT NULL,

    PRIMARY KEY (`Compras_id`, `Productos_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_pago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `monto_pagado` INTEGER NULL,
    `Metodo_Pago_id` INTEGER NOT NULL,
    `fecha` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_pago_en_Venta` (
    `Detalle_pago_id` INTEGER NOT NULL,
    `Venta_id` INTEGER NOT NULL,

    PRIMARY KEY (`Detalle_pago_id`, `Venta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_venta` (
    `Producto_id` INTEGER NOT NULL,
    `Venta_id` INTEGER NOT NULL,
    `cantidad` INTEGER NULL,
    `precio_neto` DOUBLE NULL,
    `precio_total_neto` INTEGER NULL,

    PRIMARY KEY (`Producto_id`, `Venta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direcciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calle` VARCHAR(45) NOT NULL,
    `numero_calle` INTEGER NOT NULL,
    `numero_departamento` INTEGER NULL,
    `Comunas_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direcciones_de_Clientes` (
    `Clientes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `Direcciones_id` INTEGER NOT NULL,

    PRIMARY KEY (`Clientes_id`, `Direcciones_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direcciones_de_Colaboradores` (
    `Colaboradores_id` INTEGER NOT NULL,
    `Direcciones_id` INTEGER NOT NULL,

    PRIMARY KEY (`Colaboradores_id`, `Direcciones_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado_Pago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Metodo_Pago` (
    `id` INTEGER NOT NULL,
    `metodo` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(45) NULL,
    `peso_gramos` INTEGER NULL,
    `precio_neto` INTEGER NULL,
    `stock` INTEGER NULL,
    `cod_barras` VARCHAR(255) NULL,
    `Categorias_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedores` (
    `id` INTEGER NOT NULL,
    `rut` INTEGER NULL,
    `giro` INTEGER NULL,
    `nombre` VARCHAR(45) NULL,
    `telefono` INTEGER NULL,
    `correo` VARCHAR(45) NULL,
    `pagina_web` VARCHAR(45) NULL,
    `Direcciones_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provincias` (
    `id` INTEGER NOT NULL,
    `provincia` VARCHAR(45) NOT NULL,
    `Regiones_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regiones` (
    `id` INTEGER NOT NULL,
    `region` VARCHAR(45) NOT NULL,
    `numeracion` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipos_Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_usuario` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pass_encrypt` VARCHAR(45) NULL,
    `Tipos_Usuarios_id` INTEGER NOT NULL,
    `Colaboradores_id` INTEGER NOT NULL,
    `ultimo_login` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `neto` INTEGER NOT NULL,
    `iva` INTEGER NOT NULL,
    `total` INTEGER NULL,
    `Usuarios_id` INTEGER NOT NULL,
    `Clientes_id` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `Estado_Pago_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compras` ADD CONSTRAINT `Compras_Proveedores_id_fkey` FOREIGN KEY (`Proveedores_id`) REFERENCES `Proveedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compras` ADD CONSTRAINT `Compras_Usuarios_id_fkey` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comunas` ADD CONSTRAINT `Comunas_Provincias_id_fkey` FOREIGN KEY (`Provincias_id`) REFERENCES `Provincias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_Compras` ADD CONSTRAINT `Detalle_Compras_Compras_id_fkey` FOREIGN KEY (`Compras_id`) REFERENCES `Compras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_Compras` ADD CONSTRAINT `Detalle_Compras_Productos_id_fkey` FOREIGN KEY (`Productos_id`) REFERENCES `Productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_pago` ADD CONSTRAINT `Detalle_pago_Metodo_Pago_id_fkey` FOREIGN KEY (`Metodo_Pago_id`) REFERENCES `Metodo_Pago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_pago_en_Venta` ADD CONSTRAINT `Detalle_pago_en_Venta_Detalle_pago_id_fkey` FOREIGN KEY (`Detalle_pago_id`) REFERENCES `Detalle_pago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_pago_en_Venta` ADD CONSTRAINT `Detalle_pago_en_Venta_Venta_id_fkey` FOREIGN KEY (`Venta_id`) REFERENCES `Venta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_venta` ADD CONSTRAINT `Detalle_venta_Venta_id_fkey` FOREIGN KEY (`Venta_id`) REFERENCES `Venta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_venta` ADD CONSTRAINT `Detalle_venta_Producto_id_fkey` FOREIGN KEY (`Producto_id`) REFERENCES `Productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones` ADD CONSTRAINT `Direcciones_Comunas_id_fkey` FOREIGN KEY (`Comunas_id`) REFERENCES `Comunas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones_de_Clientes` ADD CONSTRAINT `Direcciones_de_Clientes_Clientes_id_fkey` FOREIGN KEY (`Clientes_id`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones_de_Clientes` ADD CONSTRAINT `Direcciones_de_Clientes_Direcciones_id_fkey` FOREIGN KEY (`Direcciones_id`) REFERENCES `Direcciones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones_de_Colaboradores` ADD CONSTRAINT `Direcciones_de_Colaboradores_Colaboradores_id_fkey` FOREIGN KEY (`Colaboradores_id`) REFERENCES `Colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direcciones_de_Colaboradores` ADD CONSTRAINT `Direcciones_de_Colaboradores_Direcciones_id_fkey` FOREIGN KEY (`Direcciones_id`) REFERENCES `Direcciones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_Categorias_id_fkey` FOREIGN KEY (`Categorias_id`) REFERENCES `Categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proveedores` ADD CONSTRAINT `Proveedores_Direcciones_id_fkey` FOREIGN KEY (`Direcciones_id`) REFERENCES `Direcciones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincias` ADD CONSTRAINT `Provincias_Regiones_id_fkey` FOREIGN KEY (`Regiones_id`) REFERENCES `Regiones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_Colaboradores_id_fkey` FOREIGN KEY (`Colaboradores_id`) REFERENCES `Colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_Tipos_Usuarios_id_fkey` FOREIGN KEY (`Tipos_Usuarios_id`) REFERENCES `Tipos_Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_Clientes_id_fkey` FOREIGN KEY (`Clientes_id`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_Usuarios_id_fkey` FOREIGN KEY (`Usuarios_id`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_Estado_Pago_id_fkey` FOREIGN KEY (`Estado_Pago_id`) REFERENCES `Estado_Pago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

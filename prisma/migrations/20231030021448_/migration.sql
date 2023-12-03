-- CreateTable
CREATE TABLE Categorias (
    id SERIAL PRIMARY KEY,
    categoria VARCHAR(45) NOT NULL
);

-- CreateTable
CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(45),
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    correo VARCHAR(45) NOT NULL,
    celular VARCHAR(45) NOT NULL,
    direccion_id INTEGER NOT NULL,
    UNIQUE (correo),
    UNIQUE (celular)
);

-- CreateTable
CREATE TABLE Colaboradores (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(45) NOT NULL,
    apellidos VARCHAR(45) NOT NULL,
    direccion_id INTEGER NOT NULL,
    correo VARCHAR(45) NOT NULL,
    celular VARCHAR(45) NOT NULL,
    UNIQUE (correo),
    UNIQUE (celular)
);

-- CreateTable
CREATE TABLE Compras (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP(3) NOT NULL,
    proveedores_id INTEGER NOT NULL,
    total_neto INTEGER NOT NULL,
    iva INTEGER NOT NULL,
    total INTEGER NOT NULL,
    usuarios_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Comunas (
    id SERIAL PRIMARY KEY,
    comuna VARCHAR(45) NOT NULL,
    provincias_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Detalle_Compras (
    compras_id INTEGER NOT NULL,
    productos_id INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    valor_neto DOUBLE PRECISION NOT NULL,
    total_neto DOUBLE PRECISION NOT NULL,
    PRIMARY KEY (compras_id, productos_id)
);

-- CreateTable
CREATE TABLE Detalle_pago (
    id SERIAL PRIMARY KEY,
    monto_pagado INTEGER,
    metodo_pago_id INTEGER NOT NULL,
    fecha TIMESTAMP(0)
);

-- CreateTable
CREATE TABLE Detalle_pago_en_Venta (
    detalle_pago_id INTEGER NOT NULL,
    venta_id INTEGER NOT NULL,
    PRIMARY KEY (detalle_pago_id, venta_id)
);

-- CreateTable
CREATE TABLE Detalle_venta (
    producto_id INTEGER NOT NULL,
    venta_id INTEGER NOT NULL,
    cantidad INTEGER,
    precio_neto DOUBLE PRECISION,
    precio_total_neto INTEGER,
    PRIMARY KEY (producto_id, venta_id)
);

-- CreateTable
CREATE TABLE Direcciones (
    id SERIAL PRIMARY KEY,
    calle VARCHAR(45) NOT NULL,
    numero_calle INTEGER NOT NULL,
    numero_departamento INTEGER,
    comunas_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Direcciones_de_Clientes (
    clientes_id INTEGER NOT NULL,
    direcciones_id INTEGER NOT NULL,
    PRIMARY KEY (clientes_id, direcciones_id)
);

-- CreateTable
CREATE TABLE Direcciones_de_Colaboradores (
    colaboradores_id INTEGER NOT NULL,
    direcciones_id INTEGER NOT NULL,
    PRIMARY KEY (colaboradores_id, direcciones_id)
);

-- CreateTable
CREATE TABLE Estado_Pago (
    id SERIAL PRIMARY KEY,
    estado VARCHAR(45) NOT NULL
);

-- CreateTable
CREATE TABLE Metodo_Pago (
    id SERIAL PRIMARY KEY,
    metodo VARCHAR(45)
);

-- CreateTable
CREATE TABLE Productos (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR(45),
    peso_gramos INTEGER,
    precio_neto INTEGER,
    stock INTEGER,
    cod_barras VARCHAR(255),
    categorias_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Proveedores (
    id SERIAL PRIMARY KEY,
    rut INTEGER,
    giro INTEGER,
    nombre VARCHAR(45),
    telefono INTEGER,
    correo VARCHAR(45),
    pagina_web VARCHAR(45),
    direcciones_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Provincias (
    id SERIAL PRIMARY KEY,
    provincia VARCHAR(45) NOT NULL,
    regiones_id INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE Regiones (
    id SERIAL PRIMARY KEY,
    region VARCHAR(45) NOT NULL,
    numeracion VARCHAR(5) NOT NULL
);

-- CreateTable
CREATE TABLE Tipos_Usuarios (
    id SERIAL PRIMARY KEY,
    tipo_usuario VARCHAR(45) NOT NULL
);

-- CreateTable
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    pass_encrypt VARCHAR(45),
    tipos_usuarios_id INTEGER NOT NULL,
    colaboradores_id INTEGER NOT NULL,
    ultimo_login VARCHAR(45)
);

-- CreateTable
CREATE TABLE Venta (
    id SERIAL PRIMARY KEY,
    neto INTEGER NOT NULL,
    iva INTEGER NOT NULL,
    total INTEGER,
    usuarios_id INTEGER NOT NULL,
    clientes_id INTEGER NOT NULL,
    fecha TIMESTAMP(3) NOT NULL,
    estado_pago_id INTEGER NOT NULL
);

-- AddForeignKey
ALTER TABLE Compras ADD CONSTRAINT Compras_Proveedores_id_fkey FOREIGN KEY (proveedores_id) REFERENCES Proveedores(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Compras ADD CONSTRAINT Compras_Usuarios_id_fkey FOREIGN KEY (usuarios_id) REFERENCES Usuarios(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Comunas ADD CONSTRAINT Comunas_Provincias_id_fkey FOREIGN KEY (provincias_id) REFERENCES Provincias(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_Compras ADD CONSTRAINT Detalle_Compras_Compras_id_fkey FOREIGN KEY (compras_id) REFERENCES Compras(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_Compras ADD CONSTRAINT Detalle_Compras_Productos_id_fkey FOREIGN KEY (productos_id) REFERENCES Productos(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_pago ADD CONSTRAINT Detalle_pago_Metodo_Pago_id_fkey FOREIGN KEY (metodo_pago_id) REFERENCES Metodo_Pago(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_pago_en_Venta ADD CONSTRAINT Detalle_pago_en_Venta_Detalle_pago_id_fkey FOREIGN KEY (detalle_pago_id) REFERENCES Detalle_pago(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_pago_en_Venta ADD CONSTRAINT Detalle_pago_en_Venta_Venta_id_fkey FOREIGN KEY (venta_id) REFERENCES Venta(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_venta ADD CONSTRAINT Detalle_venta_Venta_id_fkey FOREIGN KEY (venta_id) REFERENCES Venta(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Detalle_venta ADD CONSTRAINT Detalle_venta_Producto_id_fkey FOREIGN KEY (producto_id) REFERENCES Productos(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Direcciones ADD CONSTRAINT Direcciones_Comunas_id_fkey FOREIGN KEY (comunas_id) REFERENCES Comunas(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Direcciones_de_Clientes ADD CONSTRAINT Direcciones_de_Clientes_Clientes_id_fkey FOREIGN KEY (clientes_id) REFERENCES Clientes(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Direcciones_de_Clientes ADD CONSTRAINT Direcciones_de_Clientes_Direcciones_id_fkey FOREIGN KEY (direcciones_id) REFERENCES Direcciones(id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE Direcciones_de_Colaboradores ADD CONSTRAINT Direcciones_de_Colaboradores_Colaboradores_id_fkey FOREIGN KEY (colaboradores_id) REFERENCES Colaboradores(id) ON DELETE RESTRICT

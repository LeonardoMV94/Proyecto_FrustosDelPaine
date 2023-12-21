-- AlterTable
ALTER TABLE Detalle_venta 
    MODIFY COLUMN cantidad INT NOT NULL,
    MODIFY COLUMN precio_neto DOUBLE NOT NULL,
    MODIFY COLUMN precio_total_neto INT NOT NULL;


-- AlterTable
ALTER TABLE Productos 
    MODIFY COLUMN descripcion VARCHAR(45) NOT NULL,
    MODIFY COLUMN peso_gramos INT NOT NULL,
    MODIFY COLUMN precio_neto INT NOT NULL,
    MODIFY COLUMN stock INT NOT NULL;


-- AlterTable
ALTER TABLE Proveedores 
    MODIFY COLUMN rut INT NOT NULL,
    MODIFY COLUMN giro INT NOT NULL,
    MODIFY COLUMN nombre VARCHAR(45) NOT NULL,
    MODIFY COLUMN telefono INT NOT NULL,
    MODIFY COLUMN correo VARCHAR(45) NOT NULL,
    MODIFY COLUMN pagina_web VARCHAR(45) NOT NULL;


-- AlterTable
ALTER TABLE Venta 
    MODIFY COLUMN total INT NOT NULL;


-- CreateIndex
CREATE UNIQUE INDEX Proveedores_correo_key ON Proveedores(correo);


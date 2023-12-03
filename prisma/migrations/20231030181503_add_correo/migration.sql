-- AlterTable
ALTER TABLE Detalle_venta 
    ALTER COLUMN cantidad SET NOT NULL,
    ALTER COLUMN precio_neto SET NOT NULL,
    ALTER COLUMN precio_total_neto SET NOT NULL;

-- AlterTable
ALTER TABLE Productos 
    ALTER COLUMN descripcion SET NOT NULL,
    ALTER COLUMN peso_gramos SET NOT NULL,
    ALTER COLUMN precio_neto SET NOT NULL,
    ALTER COLUMN stock SET NOT NULL;

-- AlterTable
ALTER TABLE Proveedores 
    ALTER COLUMN rut SET NOT NULL,
    ALTER COLUMN giro SET NOT NULL,
    ALTER COLUMN nombre SET NOT NULL,
    ALTER COLUMN telefono SET NOT NULL,
    ALTER COLUMN correo SET NOT NULL,
    ALTER COLUMN pagina_web SET NOT NULL;

-- AlterTable
ALTER TABLE Venta 
    ALTER COLUMN total SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX Proveedores_correo_key ON Proveedores(correo);

import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Venta = Prisma.VentaGetPayload<{}>

export type VentaCreate = {
    id?: number | undefined;
    neto: number;
    iva: number;
    total: number;
    Usuarios_id: number;
    Clientes_id: number;
    fecha: string | Date;
    Estado_Pago_id: number;
}

export type VentaCreateWIthDetalleProductos = VentaCreate & {
    Detalle_venta: Prisma.Detalle_ventaCreateManyInput
}
export type asdasdads = Prisma.ClientesWhereUniqueInput
export type VentaUpdate = Partial<VentaCreate>


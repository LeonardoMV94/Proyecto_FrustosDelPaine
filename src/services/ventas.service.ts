import { db } from "../utils/db.config";
import { VentaCreate, VentaUpdate, Venta, VentaCreateWIthDetalleProductos } from '../models/ventas.model';
import { connect } from "http2";

export async function getAllVentas() {
    try {
        const ventas = await db.venta.findMany({
            include: {
                Usuarios: true,
                Clientes: true,
                Detalle_pago_en_Venta:{
                    include:{
                        Detalle_pago:{
                            include:{
                                Metodo_Pago:true
                            }
                        }
                    }
                }
            }
        })
        return ventas
    } catch (error) {
        console.log("Erorr al obtener ventas", error)
        return [] 
    }

}

export async function getOneVentaById(id: number) {
    try {
        const result = await db.venta.findFirst({
            where: {
                id: id
            },
            include: {
                Detalle_venta: true
            }
        })
        return result
    } catch (error) {
        console.log("Error al obtener una venta ", error)
        return {}
    }

}

export async function createVenta(venta: VentaCreateWIthDetalleProductos) {
    try {

    //     neto: number;
    // iva: number;
    // total: number;
    // Clientes_id: number | undefined;
    // Usuarios_id: number;
    // Estadopago: number;
    // Detalle_venta: {
    //     Producto_id: number;
    //     Cantidad: number;
    //     precio_neto: number;
    //     precio_total_neto: number;
    // }[];
        return await db.venta.create({
            data: {
                fecha: new Date(),
                iva: venta.iva,
                neto: venta.neto,
                total: venta.total,
                Clientes_id: venta.Clientes_id,
                Estado_Pago_id: venta.Estado_Pago_id,
                Usuarios_id: venta.Usuarios_id,
                Detalle_venta: {
                    createMany: {
                        data: venta.Detalle_venta
                    }
                },

            },
            include: {
                Detalle_venta: true
            }
        })
    } catch (error) {
        console.log("Error de Prisma Create ", error)
        return {}
    }
}

export async function updateVenta(id: number, venta: VentaUpdate) {
    try {
        const result = await db.venta.update({
            data: venta,
            select: {
                id: true,
                neto: true,
                iva: true,
                total: true,
                fecha: true
            },
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log("Error de prisma update ", error)
        return {}
    }

}

export async function deleteVenta(id: number) {
    try {
        const result = await db.venta.delete({
            where: {
                id: id
            },
            select: {
                id: true
            }
        })
    } catch (error) {
        console.log("Error al delete Prisma ", error)
        return {}
    }

}

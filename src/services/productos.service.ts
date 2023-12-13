import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { ProductoCreate,ProductoUpdate} from "../models/productos.model";

export async function getAllProductos() {
    try {
        const productos = await db.productos.findMany({
            include: {
                Categorias: true
            }
        })
        return productos
    } catch (error) {
        console.log("Error al obtener productos ",error)
        return[]
    }
    
}

export async function getOneProductoById(id:number) {
    try {
        const producto = await db.productos.findFirst({
            where:{
                id:id
            }
        })
        return producto
    } catch (error) {
        console.log("Error al obtener producto ",error)
        return{}
    }
    
}

export async function createProducto(productos: ProductoCreate) {
    try {
        return await db.productos.create({
            data:productos,
            select: {
                id: true,
                descripcion: true
            }
        })
    } catch (error) {
        console.log("Error al crear proucto ",error)
        return{}
    }

    
}

export async function updateProducto(id:number,producto :ProductoUpdate) {
    try {
        const result = await db.productos.update({
            data:producto,
            select:{
                id:true,
                descripcion:true,
                peso_gramos:true,
                precio_neto:true,
                stock:true,
                cod_barras:true
            },
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al actualizar, Prisma ",error)
        return{}
    }
    
}

export async function deleteProducto(id:number) {
    try {
        const result = await db.productos.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
        return result
    } catch (error) {
        console.log("Error al eliminar, Prisma ",error)
        return{}
    }
    
}
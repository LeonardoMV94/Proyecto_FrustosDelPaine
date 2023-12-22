import { db } from '../utils/db.config'
import { Usuario, UsuarioUpdate } from "../models/ususarios.model"
import bcrypt from 'bcrypt'

export async function getAllUsuarios() {
    try {
        const usuarios = await db.usuarios.findMany({
            include: {
                Tipos_Usuarios: true,
                Colaboradores: true
            }
        })
        return usuarios
    } catch (error) {
        console.log("Error al obtener Los Usuarios")
        return []
    }
}

export async function getOneUsuarioById(id: number) {
    try {
        const usuario = await db.usuarios.findFirst({
            where: {
                id: id
            },
            include: {
                Colaboradores: true
            }
        })
        return usuario
    } catch (error) {
        console.log("Error al obtener Usuarios", error)
        return
    }

}

export async function getOneUsuarioByCorreoToAuth(correo: string) {
    const usuario = await db.usuarios.findFirst({
        where: {
            Colaboradores: {
                correo: correo
            }
        },
        include: {
            Colaboradores: true,
            Tipos_Usuarios: true
        }
    })

    const datos = {
        usuario: { 
            correo: usuario?.Colaboradores.correo, 
            password: usuario?.pass_encrypt
        },
        rol: usuario?.Tipos_Usuarios.tipo_usuario
    }

    return datos
}

export async function getOneUsuarioByCorreo(correo: string) {

    const usuario = await db.usuarios.findFirst({
        where: {
            Colaboradores: {
                correo: correo
            }
        },
        include: {
            Colaboradores: true
        }
    })
    if (!usuario) throw new Error('No se encontró el usuario')
    return usuario

}

export async function createUsuario(usuario: Usuario) {
    try {
        const { Colaboradores_id, Tipos_Usuarios_id, pass_encrypt: pass } = usuario
        const pass_encrypt = await bcrypt.hash(pass!, 12)
        return await db.usuarios.create({
            data: {
                Colaboradores_id,
                Tipos_Usuarios_id,
                pass_encrypt,
                ultimo_login: new Date()
            },
            select: {
                id: true,
            }
        })
    } catch (error) {
        console.log("createUsuario error: ", error)
        return {}
    }

}

export async function updateUsuario(id: number, usuario: UsuarioUpdate) {
    try {
        const result = await db.usuarios.update({
            data: usuario,
            select: {
                id: true,
                pass_encrypt: true,
                ultimo_login: true

            },
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log("Eror de prisma", error)
        return {}
    }

}

export async function deleteUsuario(id: number) {
    try {
        const result = await db.usuarios.delete({
            where: {
                id: id
            },
            select: {
                id: true,
            }
        })
    } catch (error) {

    }


}
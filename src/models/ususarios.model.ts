import { PrismaClient, Prisma } from '@prisma/client'


export type Usuario = Prisma.UsuariosGetPayload<{}>

export type UsuarioCreate = Usuario

export type UsuarioUpdate = Partial<UsuarioCreate>

export type UsuarioRequest = {
    usuario: {
        correo: string,
        rol: string
    },
    token: string
}

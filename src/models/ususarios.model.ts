import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Usuario = Prisma.UsuariosGetPayload<{}>

export type UsuarioCreate = Usuario

export type UsuarioUpdate = Partial<UsuarioCreate>

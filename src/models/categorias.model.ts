import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Categoria = Prisma.CategoriasGetPayload<{}>

export type CategoriaCreate = Categoria

export type CategoriaUpdate = CategoriaCreate


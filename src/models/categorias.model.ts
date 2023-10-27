import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Categoria = Prisma.CategoriasGetPayload<{}>

export type CategoriaCreate = Omit<Categoria, 'id'>

export type CategoriaUpdate = CategoriaCreate


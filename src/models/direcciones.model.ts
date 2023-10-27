import {PrismaClient, Prisma} from '@prisma/client'
import { type } from 'os'

const prisma = new PrismaClient()

export type Direccion = Prisma.DireccionesGetPayload<{}>

export  type DireccionCreate = Omit<Direccion,'id'>

export type DireccionUpdate = Partial<DireccionCreate>
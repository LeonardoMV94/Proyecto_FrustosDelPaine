"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// import { PrismaClient } para ejecutar el framework de prisma
const client_1 = require("@prisma/client");
//declara una variable db de tipo PrismaClient
let db;
//si no existe la variable global __db, crea una nueva instancia de PrismaClient
if (!global.__db) {
    // instancia de prisma client
    global.__db = new client_1.PrismaClient({ log: ['query', 'info'] });
}
//asigna la variable global __db a la variable db
exports.db = db = global.__db;

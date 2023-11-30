"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.getOneClienteById = exports.getAllClientes = void 0;
const db_config_1 = require("../utils/db.config");
function getAllClientes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientes = yield db_config_1.db.clientes.findMany({
                include: {
                    Direcciones_de_Clientes: {
                        include: {
                            Direcciones: {
                                include: {
                                    Comunas: true
                                }
                            }
                        }
                    }
                }
            });
            return clientes;
        }
        catch (error) {
            console.log("error al obtener clientes ", error);
            return [];
        }
    });
}
exports.getAllClientes = getAllClientes;
function getOneClienteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliente = yield db_config_1.db.clientes.findFirst({
                where: {
                    id: id
                }
            });
            return cliente;
        }
        catch (error) {
            console.log("error al obtener clientes ", error);
            return {};
        }
    });
}
exports.getOneClienteById = getOneClienteById;
function createCliente(cliente) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.clientes.create({
                data: cliente
            });
        }
        catch (error) {
            console.log("createCliente error: ", error);
            return {};
        }
    });
}
exports.createCliente = createCliente;
function updateCliente(id, cliente) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.clientes.update({
                data: cliente,
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    correo: true,
                    celular: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error Prisma: ", error);
            return {};
        }
    });
}
exports.updateCliente = updateCliente;
function deleteCliente(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.clientes.delete({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    rut: true
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error Prisma: ", error);
            return {};
        }
    });
}
exports.deleteCliente = deleteCliente;

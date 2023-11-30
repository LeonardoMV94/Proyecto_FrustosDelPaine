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
exports.deleteCompra = exports.updateCompra = exports.createCompra = exports.getOneCompraById = exports.getAllCompras = void 0;
const db_config_1 = require("../utils/db.config");
function getAllCompras() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const compra = yield db_config_1.db.compras.findMany({
                include: {
                    Proveedores: true,
                    Usuarios: true
                }
            });
            return compra;
        }
        catch (error) {
            console.log("Error al obtener compras");
            return [];
        }
    });
}
exports.getAllCompras = getAllCompras;
function getOneCompraById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const compra = yield db_config_1.db.compras.findFirst({
                where: {
                    id: id
                }
            });
            return compra;
        }
        catch (error) {
            console.log("Error al obtener una compra ", error);
            return {};
        }
    });
}
exports.getOneCompraById = getOneCompraById;
function createCompra(compra) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.compras.create({
                data: compra
            });
        }
        catch (error) {
            console.log("Error createCompra : ", error);
            return {};
        }
    });
}
exports.createCompra = createCompra;
function updateCompra(id, compra) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.compras.update({
                data: compra,
                select: {
                    id: true,
                    fecha: true,
                    total_neto: true,
                    iva: true,
                    total: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al update compras: ", error);
            return {};
        }
    });
}
exports.updateCompra = updateCompra;
function deleteCompra(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.compras.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
            console.log("Error en el delete de compras: ", error);
            return {};
        }
    });
}
exports.deleteCompra = deleteCompra;

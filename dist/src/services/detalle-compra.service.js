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
exports.deleteDetalleCompra = exports.updateDetalleCompra = exports.CreateDetalleCompra = exports.getOneDetalleCompraById = exports.getAllDetalleCompra = void 0;
const db_config_1 = require("../utils/db.config");
function getAllDetalleCompra() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const detalleCompra = yield db_config_1.db.detalle_Compras.findMany({
                include: {
                    Compras: true,
                    Productos: true
                }
            });
            return detalleCompra;
        }
        catch (error) {
            console.log("Error al obtener Detalle Compra", error);
            return [];
        }
    });
}
exports.getAllDetalleCompra = getAllDetalleCompra;
function getOneDetalleCompraById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.detalle_Compras.findFirst({
                where: {
                    Compras_id: id,
                    Productos_id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al obtener el detalle compra");
            return {};
        }
    });
}
exports.getOneDetalleCompraById = getOneDetalleCompraById;
function CreateDetalleCompra(detalleCompra) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.detalle_Compras.create({
                data: detalleCompra
            });
        }
        catch (error) {
            console.log("Error en Prisma Create", error);
            return {};
        }
    });
}
exports.CreateDetalleCompra = CreateDetalleCompra;
function updateDetalleCompra(idCompra, idProducto, detalleCompra) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedDetalleCompra = yield db_config_1.db.detalle_Compras.updateMany({
                where: {
                    Compras_id: idCompra,
                    Productos_id: idProducto,
                },
                data: detalleCompra,
            });
            return updatedDetalleCompra;
        }
        catch (error) {
            console.log("Error en Prisma Update", error);
            return {};
        }
    });
}
exports.updateDetalleCompra = updateDetalleCompra;
function deleteDetalleCompra(idCompra, idProducto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteDetalleCompra = yield db_config_1.db.detalle_Compras.delete({
                where: {
                    Compras_id_Productos_id: {
                        Compras_id: idCompra,
                        Productos_id: idProducto
                    }
                }
            });
            return deleteDetalleCompra;
        }
        catch (error) {
            console.log("Error al delete Prisma ", error);
            return {};
        }
    });
}
exports.deleteDetalleCompra = deleteDetalleCompra;

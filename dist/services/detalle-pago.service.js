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
exports.deleteDetallePago = exports.upateDetallePAgo = exports.createDetallePAgo = exports.getOneDetallePagoBtId = exports.getAllDetallePago = void 0;
const db_config_1 = require("../utils/db.config");
function getAllDetallePago() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const detallePAgo = yield db_config_1.db.detalle_pago.findMany({
                include: {
                    Metodo_Pago: true
                }
            });
            return detallePAgo;
        }
        catch (error) {
            console.log("Error al obtener los detalles pago ", error);
            return {};
        }
    });
}
exports.getAllDetallePago = getAllDetallePago;
function getOneDetallePagoBtId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const detallePago = yield db_config_1.db.detalle_pago.findFirst({
                where: {
                    id: id
                }
            });
            return detallePago;
        }
        catch (error) {
            console.log("Eror al obtene un detalle pago ", error);
            return {};
        }
    });
}
exports.getOneDetallePagoBtId = getOneDetallePagoBtId;
function createDetallePAgo(detallePAgo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.detalle_pago.create({
                data: detallePAgo
            });
        }
        catch (error) {
            console.log("Error al crear detalle pago ", error);
            return {};
        }
    });
}
exports.createDetallePAgo = createDetallePAgo;
function upateDetallePAgo(id, detallePago) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.detalle_pago.update({
                data: detallePago,
                select: {
                    id: true,
                    monto_pagado: true,
                    fecha: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al actualizar, Prisma ", error);
            return {};
        }
    });
}
exports.upateDetallePAgo = upateDetallePAgo;
function deleteDetallePago(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.detalle_pago.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
        }
    });
}
exports.deleteDetallePago = deleteDetallePago;

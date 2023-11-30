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
exports.deleteEstadoPago = exports.updateEstadoPago = exports.createEstadoPago = exports.getOneEstadoPagoById = exports.getAllEstadoPago = void 0;
const db_config_1 = require("../utils/db.config");
function getAllEstadoPago() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estadoPago = yield db_config_1.db.estado_Pago.findMany();
            return estadoPago;
        }
        catch (error) {
            console.log("Error al obtener metodos de pago ", error);
            return {};
        }
    });
}
exports.getAllEstadoPago = getAllEstadoPago;
function getOneEstadoPagoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.estado_Pago.findFirst({
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al obtener un metood de pago ", error);
            return {};
        }
    });
}
exports.getOneEstadoPagoById = getOneEstadoPagoById;
function createEstadoPago(estadoPago) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.estado_Pago.create({
                data: estadoPago
            });
        }
        catch (error) {
            console.log("Error al crear metodo pago ", error);
            return {};
        }
    });
}
exports.createEstadoPago = createEstadoPago;
function updateEstadoPago(id, estadoPago) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.estado_Pago.update({
                data: estadoPago,
                select: {
                    id: true,
                    estado: true
                },
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            console.log("Error de update Prisma ", error);
            return {};
        }
    });
}
exports.updateEstadoPago = updateEstadoPago;
function deleteEstadoPago(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.estado_Pago.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
            console.log("Error al delete de Estado Pago ", error);
            return {};
        }
    });
}
exports.deleteEstadoPago = deleteEstadoPago;

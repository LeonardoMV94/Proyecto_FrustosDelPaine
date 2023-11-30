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
exports.deleteMetodoPago = exports.updateMetodoPago = exports.createMetodoPago = exports.getOneMetodoPagoById = exports.getAllMetodoPago = void 0;
const db_config_1 = require("../utils/db.config");
function getAllMetodoPago() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const metodosPagos = yield db_config_1.db.metodo_Pago.findMany();
            return metodosPagos;
        }
        catch (error) {
            console.log("error al obtener metodo de pago", error);
            return [];
        }
    });
}
exports.getAllMetodoPago = getAllMetodoPago;
function getOneMetodoPagoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const metodoPago = yield db_config_1.db.metodo_Pago.findFirst({
                where: {
                    id: id
                }
            });
            return metodoPago;
        }
        catch (error) {
            console.log("Error al obtener un metodo de pago", error);
            return [];
        }
    });
}
exports.getOneMetodoPagoById = getOneMetodoPagoById;
function createMetodoPago(metodo_pago) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.metodo_Pago.create({
                data: metodo_pago
            });
        }
        catch (error) {
            console.log("createMetodoPAgo Error", error);
            return [];
        }
    });
}
exports.createMetodoPago = createMetodoPago;
function updateMetodoPago(id, metodo_Pago) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.metodo_Pago.update({
                data: metodo_Pago,
                select: {
                    id: true,
                    metodo: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error Prisma : ", error);
            return {};
        }
    });
}
exports.updateMetodoPago = updateMetodoPago;
function deleteMetodoPago(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.metodo_Pago.delete({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    metodo: true
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error e Prisma ", error);
            return {};
        }
    });
}
exports.deleteMetodoPago = deleteMetodoPago;

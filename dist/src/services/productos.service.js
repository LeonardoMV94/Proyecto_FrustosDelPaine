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
exports.deleteProducto = exports.updateProducto = exports.createProducto = exports.getOneProductoById = exports.getAllProductos = void 0;
const db_config_1 = require("../utils/db.config");
function getAllProductos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productos = yield db_config_1.db.productos.findMany({
                include: {
                    Categorias: true
                }
            });
            return productos;
        }
        catch (error) {
            console.log("Error al obtener productos ", error);
            return [];
        }
    });
}
exports.getAllProductos = getAllProductos;
function getOneProductoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const producto = yield db_config_1.db.productos.findFirst({
                where: {
                    id: id
                }
            });
            return producto;
        }
        catch (error) {
            console.log("Error al obtener producto ", error);
            return {};
        }
    });
}
exports.getOneProductoById = getOneProductoById;
function createProducto(productos) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.productos.create({
                data: productos
            });
        }
        catch (error) {
            console.log("Error al crear proucto ", error);
            return {};
        }
    });
}
exports.createProducto = createProducto;
function updateProducto(id, producto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.productos.update({
                data: producto,
                select: {
                    id: true,
                    descripcion: true,
                    peso_gramos: true,
                    precio_neto: true,
                    stock: true,
                    cod_barras: true
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
exports.updateProducto = updateProducto;
function deleteProducto(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.productos.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al eliminar, Prisma ", error);
            return {};
        }
    });
}
exports.deleteProducto = deleteProducto;

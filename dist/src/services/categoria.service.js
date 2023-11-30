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
exports.deleteCategoria = exports.updateCategoria = exports.createCategoria = exports.getOnerCategoriaById = exports.getAllCategoria = void 0;
const db_config_1 = require("../utils/db.config");
function getAllCategoria() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield db_config_1.db.categorias.findMany();
            return categoria;
        }
        catch (error) {
            console.log("Error al obtener categorias ", error);
            return [];
        }
    });
}
exports.getAllCategoria = getAllCategoria;
function getOnerCategoriaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield db_config_1.db.categorias.findFirst({
                where: {
                    id: id
                }
            });
            return categoria;
        }
        catch (error) {
            console.log("Error al obtener una categoria ", error);
            return {};
        }
    });
}
exports.getOnerCategoriaById = getOnerCategoriaById;
function createCategoria(categoria) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.categorias.create({
                data: categoria
            });
        }
        catch (error) {
            console.log("Error en crear categoria ", error);
            return {};
        }
    });
}
exports.createCategoria = createCategoria;
function updateCategoria(id, categoria) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.categorias.update({
                data: categoria,
                select: {
                    id: true,
                    categoria: true
                },
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            console.log("Error en update categoria ", error);
            return {};
        }
    });
}
exports.updateCategoria = updateCategoria;
function deleteCategoria(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.categorias.delete({
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
exports.deleteCategoria = deleteCategoria;

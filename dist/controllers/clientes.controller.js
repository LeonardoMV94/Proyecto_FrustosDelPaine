"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClientesServices = __importStar(require("../services/clientes.service"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield ClientesServices.getAllClientes();
        response.status(200).json(clientes);
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 });
    }
}));
router.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const clientes = yield ClientesServices.getOneClienteById(id);
        response.status(200).json(clientes);
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 });
    }
}));
router.put("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    const clienteBody = request.body;
    try {
        const result = yield ClientesServices.updateCliente(id, clienteBody);
        response.status(200).json(result);
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 });
    }
}));
router.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clienteBody = request.body;
        const result = yield ClientesServices.createCliente(clienteBody);
        return response.status(201).json(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mensaje: "No se pudo crear el cliente",
                code: error.code,
                meta: error.meta,
                error: error.message
            });
        }
        return response.status(500).json({
            mensaje: "No se pudo eliminar el cliente",
            code: error.code,
            meta: error.meta,
            error: error.message,
        });
    }
}));
router.delete("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const result = yield ClientesServices.deleteCliente(id);
        response.status(204).json(result);
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 });
    }
}));
exports.default = router;

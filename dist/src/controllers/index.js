"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_controller_1 = __importDefault(require("./clientes.controller"));
const ventas_controller_1 = __importDefault(require("./ventas.controller"));
function routes(app) {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    // endpoint 
    router.get("/test", (request, response) => {
        response.status(200).json({
            message: "todo ok"
        });
    });
    router.use("/clientes", clientes_controller_1.default);
    router.use("/ventas", ventas_controller_1.default);
}
exports.default = routes;

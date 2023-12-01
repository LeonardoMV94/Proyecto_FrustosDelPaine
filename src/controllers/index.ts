import express from "express"
import type { Application, Request, Response } from "express"
import ClientesController from './clientes.controller'
import VentasController from './ventas.controller'
import ProveedoresController from './proveedores.controller'
import UsuariosController from './usuarios.controller'
import ColaboradoresController from './colaboradores.controllers'
import ProductosController from './productos.controller'
import CategoriasController from './categoria.controller'




export default function routes(app: Application) {
    const router = express.Router()

    app.use('/api/v1', router)

    // endpoint 
    router.get("/test", (request: Request, response: Response) => {
        response.status(200).json({
            message: "todo ok"
        })
    })

    router.use("/clientes", ClientesController)
    router.use("/ventas", VentasController)
    router.use("/proveedores",ProveedoresController)
    router.use("/usuarios",UsuariosController)
    router.use("/colaboradores",ColaboradoresController)
    router.use("/productos",ProductosController)
    router.use("/categorias",CategoriasController)
}


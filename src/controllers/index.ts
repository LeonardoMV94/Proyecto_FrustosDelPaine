import { Router } from "express"
import passport from 'passport';


import type { Application, Request, Response } from "express"
import ClientesController from './clientes.controller'
import VentasController from './ventas.controller'
import ProveedoresController from './proveedores.controller'
import UsuariosController from './usuarios.controller'
import ColaboradoresController from './colaboradores.controllers'
import ProductosController from './productos.controller'
import CategoriasController from './categoria.controller'
import DireccionesController from './direcciones.controller'
import ComprasController from './compras.controller'
import DetalleComprasController from './detalle-compra.controller'
import DetallePagoController from './detalle-pago.controller'
import DetalleVentaController from './detalle-venta.controller'
import EstadoPagoController from './estado-pago.controller'
import MetodoPagoController from './metodo-pago.controller'
import TipoUsuarioController from './tipo-usuarios.controller'
import AuthController from './auth.controller'

export default function routes(app: Application) {
    const router = Router()

    app.use('/api/v1', router)

    // endpoint 
    router.get("/test", (request: Request, response: Response) => {
        response.status(200).json({
            message: "todo ok"
        })
    })

    router.use('/login', AuthController)
    router.use("/clientes", ClientesController)
    router.use("/ventas", VentasController)
    router.use("/proveedores", ProveedoresController)
    router.use("/usuarios", UsuariosController)
    router.use("/colaboradores", ColaboradoresController)
    router.use("/productos", ProductosController)
    router.use("/categorias", CategoriasController)
    router.use("/direcciones", DireccionesController)
    router.use("/compras", ComprasController)
    router.use("/detalle-compras", DetalleComprasController)
    router.use("/detalle-pago", DetallePagoController)
    router.use("/detalle-venta", DetalleVentaController)
    router.use("/estado-pago", EstadoPagoController)
    router.use("/metodo-pago", MetodoPagoController)
    router.use("/tipo-usuario", TipoUsuarioController)

    router.all('*', (req: Request, res :Response) => {
        res.status(400).send({
            message: "No se encontró la ruta solicitada",
            errorCode : 400,
            image: 'https://http.cat/400'
        })
    })
}


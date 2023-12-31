import { Router } from "express"
import type { Application, Request, Response } from "express"
import passport from 'passport';

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

import * as DireccionesService from '../services/direcciones.service'
import { checkAdminRol } from "../middlewares/auth.handler";

export default function routes(app: Application) {
    const router = Router()

    app.use('/api/v1', router)

    // endpoint 
    router.get("/test", (request: Request, response: Response) => {
        response.status(200).json({
            message: "ok"
        })
    })

    

    router.use('/auth', AuthController)
    router.use("/clientes", passport.authenticate('jwt', { session: false }), ClientesController)
    router.use("/ventas", passport.authenticate('jwt', { session: false }), VentasController)
    router.use("/proveedores", passport.authenticate('jwt', { session: false }), ProveedoresController)
    router.use("/usuarios", passport.authenticate('jwt', { session: false }), UsuariosController)
    router.use("/colaboradores", passport.authenticate('jwt', { session: false }), ColaboradoresController)
    router.use("/productos", passport.authenticate('jwt', { session: false }), ProductosController)
    router.use("/categorias", passport.authenticate('jwt', { session: false }), CategoriasController)
    router.use("/direcciones", passport.authenticate('jwt', { session: false }), DireccionesController)
    router.use("/compras", passport.authenticate('jwt', { session: false }), ComprasController)
    router.use("/detalle-compras", passport.authenticate('jwt', { session: false }), DetalleComprasController)
    router.use("/detalle-pago", passport.authenticate('jwt', { session: false }), DetallePagoController)
    router.use("/detalle-venta", passport.authenticate('jwt', { session: false }), DetalleVentaController)
    router.use("/estado-pago", passport.authenticate('jwt', { session: false }), EstadoPagoController)
    router.use("/metodo-pago", passport.authenticate('jwt', { session: false }), MetodoPagoController)
    router.use("/tipo-usuario", passport.authenticate('jwt', { session: false }),checkAdminRol, TipoUsuarioController)

    router.get('/comunas/', async (request: Request, response: Response) => {
        try {
            const comunas = await DireccionesService.getAllComunas()
            response.status(200).json(comunas)
        } catch (error) {
            response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

        }
    })

    router.get('/comunas/:idProvincia', async (request: Request, response: Response) => {
        try {
            const id: number = parseInt(request.params.idProvincia, 0)
            const comunas = await DireccionesService.getComunasNested(id)
            response.status(200).json(comunas)
        } catch (error) {
            response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

        }
    })
    router.get('/provincias/:idRegion', async (request: Request, response: Response) => {
        try {
            const id: number = parseInt(request.params.idRegion, 0)
            const comunas = await DireccionesService.getOneProvincia(id)
            response.status(200).json(comunas)
        } catch (error) {
            response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

        }
    })

    router.get('/regiones', async (request: Request, response: Response) => {
        try {
            const comunas = await DireccionesService.getRegiones()
            response.status(200).json(comunas)
        } catch (error) {
            response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

        }
    })

    router.all('*', (req: Request, res: Response) => {
        res.status(400).send({
            message: "No se encontró la ruta solicitada",
            errorCode: 400,
            image: 'https://http.cat/400'
        })
    })

}
import express from "express"
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
import * as DireccionesService from '../services/direcciones.service'


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
    router.use("/direcciones",DireccionesController)
    router.use("/compras",ComprasController)
    router.use("/detalle-compras",DetalleComprasController)
    router.use("/detalle-pago",DetallePagoController)
    router.use("/detalle-venta",DetalleVentaController)
    router.use("/estado-pago",EstadoPagoController)
    router.use("/metodo-pago",MetodoPagoController)
    router.use("/tipo-usuario",TipoUsuarioController)

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
            const id:number = parseInt(request.params.idProvincia,0)
            const comunas = await DireccionesService.getComunasNested(id)
            response.status(200).json(comunas)
        } catch (error) {
            response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })
    
        }
    })
    router.get('/provincias/:idRegion', async (request: Request, response: Response) => {
        try {
            const id:number = parseInt(request.params.idRegion,0)
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
}


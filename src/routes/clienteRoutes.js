import express from "express";
import {
    crearCliente,
    editarCliente, eliminarCliente,
    obtenerTodosClientes,
    obtenerClienteConVista
} from "../controllers/clienteController.js";

const clienteRouter = express.Router();

clienteRouter.get("/", obtenerTodosClientes)

clienteRouter.post("/crear", crearCliente)
clienteRouter.get("/crear", (req, res) =>{
    res.render("clientes/clienteCrearView");
})

clienteRouter.get("/editar/:codigo", obtenerClienteConVista('clientes/clienteEditarView'))
clienteRouter.post("/editar/:codigo", editarCliente)

clienteRouter.get("/eliminar/:codigo", obtenerClienteConVista('clientes/clienteEliminarView'))
clienteRouter.post("/eliminar/:codigo", eliminarCliente)

clienteRouter.get("/ver/:codigo", obtenerClienteConVista('clientes/clienteVerView'))

export default clienteRouter;
import express from "express";
import {
    crearEmpleado,
    editarEmpleado, eliminarEmpleado,
    obtenerEmpleadoConVista,
    obtenerTodosLosEmpleados
} from "../controllers/empleadoController.js";


const empleadoRouter = express.Router();

empleadoRouter.get("/", obtenerTodosLosEmpleados)

empleadoRouter.post("/crear", crearEmpleado)
empleadoRouter.get("/crear", (req, res) =>{
    res.render("empleados/empleadoCrearView");
})

empleadoRouter.get("/editar/:codigo", obtenerEmpleadoConVista('empleados/empleadoEditarView'))
empleadoRouter.post("/editar/:codigo", editarEmpleado)

empleadoRouter.get("/eliminar/:codigo", obtenerEmpleadoConVista('empleados/empleadoEliminarView'))
empleadoRouter.post("/eliminar/:codigo", eliminarEmpleado)

empleadoRouter.get("/ver/:codigo", obtenerEmpleadoConVista('empleados/empleadoVerView'))

export default empleadoRouter;
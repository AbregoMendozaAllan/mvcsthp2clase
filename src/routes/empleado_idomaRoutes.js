import express from 'express';
import {
    agregarIdiomaAEmpleado, editarIdiomaDeEmpleado, eliminarIdiomaDeEmpleado,
    listarIdiomasNoAsignados, obtenerIdiomaDeEmpleadoConVista,
    obtenerIdiomasDeEmpleado, obtenerTodosEmpleadosConIdiomas
} from "../controllers/empleado_IdiomaController.js";

const empleado_idomaRouter = express.Router();

empleado_idomaRouter.get('/empleado/:codigo/idiomas', obtenerIdiomasDeEmpleado);

empleado_idomaRouter.get('/empleado/:codigo/crear', listarIdiomasNoAsignados);
empleado_idomaRouter.post('/empleado/:codigo/crear', agregarIdiomaAEmpleado);

empleado_idomaRouter.get('/empleado/:codigoEmpleado/eliminarIdioma/:codigoIdioma',
    obtenerIdiomaDeEmpleadoConVista('empleado_idioma/empleado_idiomaEliminarView'),);
empleado_idomaRouter.post('/empleado/:codigoEmpleado/eliminarIdioma/:codigoIdioma', eliminarIdiomaDeEmpleado);

empleado_idomaRouter.get('/empleado/:codigoEmpleado/editarIdioma/:codigoIdioma',
    obtenerIdiomaDeEmpleadoConVista('empleado_idioma/empleado_idiomaEditarView'),);
empleado_idomaRouter.post('/empleado/:codigoEmpleado/editarIdioma/:codigoIdioma', editarIdiomaDeEmpleado);

empleado_idomaRouter.get('/', obtenerTodosEmpleadosConIdiomas);

export default empleado_idomaRouter;
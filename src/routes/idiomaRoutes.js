import express from "express";
import {
    crearIdioma, editarIdioma, eliminarIdioma, obtenerIdiomaConVista,
    obtenerTodosIdiomas

} from "../controllers/idiomaController.js";

const idiomaRouter = express.Router();

idiomaRouter.get("/", obtenerTodosIdiomas)

idiomaRouter.post("/crear", crearIdioma)
idiomaRouter.get("/crear", (req, res) =>{
    res.render("idiomas/idiomaCrearView");
})

idiomaRouter.get("/editar/:codigo", obtenerIdiomaConVista('idiomas/idiomaEditarView'))
idiomaRouter.post("/editar/:codigo", editarIdioma)

idiomaRouter.get("/eliminar/:codigo", obtenerIdiomaConVista('idiomas/idiomaEliminarView'))
idiomaRouter.post("/eliminar/:codigo", eliminarIdioma)

idiomaRouter.get("/ver/:codigo", obtenerIdiomaConVista('idiomas/idiomaVerView'))

export default idiomaRouter;
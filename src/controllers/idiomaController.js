import {
    deleteIdioma,
    getAllIdiomas,
    getIdiomaById,
    insertIdioma,
    updateIdioma
} from "../config/idiomaDao.js";

export const obtenerTodosIdiomas = async (req, res) => {
    try {
        const idiomas = await getAllIdiomas();
        res.render('idiomas/idiomasView', { idiomas });
    } catch (error) {
        console.log(error);
    }
}

export const crearIdioma = async(req, res) => {
    try {
        await insertIdioma(...Object.values(req.body));
        res.send('<script>alert("Idioma creado existosamente!"); window.location.href = "/idiomas"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error idioma no fue creado!"); window.location.href = "/idiomas"</script>');
    }
}

export const obtenerIdiomaConVista = (viewPath) => {
    const obtenerIdioma = async (req, res, viewPath) => {
        try {
            const [idioma] = await getIdiomaById(req.params.codigo);
            res.render(viewPath, { idioma });
        } catch (e) {
            console.log(e);
            res.status(500).send("Error retrieving client data");
        }
    };
    return async (req, res) => {
        await obtenerIdioma(req, res, viewPath);
    };
};

export const editarIdioma = async(req, res) => {
    try {
        const idioma = { codigo: req.params.codigo, ...req.body };
        await updateIdioma(idioma.idioma, idioma.codigo);
        res.send('<script>alert("Idioma modificado exitosamente"); window.location.href = "/idiomas"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error al modificar idioma"); window.location.href = "/idiomas"</script>');
    }
};

export const eliminarIdioma = async(req, res) => {
    try {
        await deleteIdioma(req.params.codigo);
        res.send('<script>alert("Idioma eliminado exitosamente"); window.location.href = "/idiomas"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Idioma no se pudo eliminar"); window.location.href = "/idiomas"</script>');
    }
}
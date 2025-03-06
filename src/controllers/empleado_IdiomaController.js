import {
    deleteIdiomFromEmpleado, getAllEmpleadosWithIdiomas, getEmpleadoIdiomaByEmpleadoIdAndIdiomaId,
    getIdiomasByEmpleadoId,
    getIdiomasNotAsigned,
    insertEmpleadoIdioma, updateFecha
} from "../config/empleado_idiomaDao.js";
import {dateParser, parseDatesInQueryResult} from "../utils/dateParser.js";

export const obtenerTodosEmpleadosConIdiomas = async (req, res) => {
    try {
        const resultados = await getAllEmpleadosWithIdiomas();
        const empleados_idiomas = parseDatesInQueryResult(resultados, 'fecha');
        console.log(empleados_idiomas);
        res.render('empleado_idioma/empleados_idiomasTodosView', { empleados_idiomas });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerIdiomasDeEmpleado = async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const resultado = await getIdiomasByEmpleadoId(codigo);
        const empleado_idioma = parseDatesInQueryResult(resultado, 'fecha');
        res.render('empleado_idioma/empleado_idiomasView', { empleado_idioma, codigo_empleado: codigo });
    } catch (error) {
        console.log('No tiene lenguajes registrados', error);
    }
};

export const listarIdiomasNoAsignados = async (req, res) => {
    try {
        const codigo_empleado = req.params.codigo;
        const idiomas = await getIdiomasNotAsigned(codigo_empleado);
        res.render('empleado_idioma/empleado_idiomaCrearView', { idiomas, codigo_empleado })
    } catch (e) {
        console.log(e);
    }
}

export const agregarIdiomaAEmpleado = async (req, res) => {
    try {
        const codigoEmpleado = req.params.codigo;
        const { codigo_idioma, fecha } = req.body;
        await insertEmpleadoIdioma(codigoEmpleado, codigo_idioma, fecha);
        res.send(
            `<script>
                alert("Idioma agregado exitosamente!");
                window.location.href = "/empleado_idiomas/empleado/${codigoEmpleado}/idiomas";
            </script>`
        );
    } catch (e){
        console.log(e);
    }
}

export const eliminarIdiomaDeEmpleado = async (req, res) => {
    try {
        const codigoEmpleado = req.params.codigoEmpleado;
        const codigoIdioma = req.params.codigoIdioma;
        await deleteIdiomFromEmpleado(codigoEmpleado, codigoIdioma);
        res.send(
            `<script>
                alert("Idioma eliminado exitosamente!");
                window.location.href = "/empleado_idiomas/empleado/${codigoEmpleado}/idiomas";
            </script>`
        );
    } catch(e) {
        console.log(e);
    }
}

export const obtenerIdiomaDeEmpleadoConVista = (viewPath) => {
    const obtenerIdiomaEmpleado = async (req, res, viewPath) => {
        try {
            const codigoEmpleado = req.params.codigoEmpleado;
            const codigoIdioma = req.params.codigoIdioma;
            const [resultado] = await getEmpleadoIdiomaByEmpleadoIdAndIdiomaId(codigoEmpleado, codigoIdioma);
            const empleado_idioma = dateParser(resultado, 'fecha');
            const idiomas = await getIdiomasNotAsigned(codigoEmpleado);
            res.render(viewPath, { empleado_idioma, idiomas });
        } catch (e) {
            console.log(e);
            res.status(500).send("Error retrieving client data");
        }
    };
    return async (req, res) => {
        await obtenerIdiomaEmpleado(req, res, viewPath);
    };
};

export const editarIdiomaDeEmpleado = async (req, res) => {
    try {
        const codigoEmpleado = req.params.codigoEmpleado;
        const codigoIdioma = req.params.codigoIdioma;
        const fecha = req.body.fecha;
        await updateFecha(fecha, codigoEmpleado, codigoIdioma);
        res.send(
            `<script>
                alert("Idioma editado exitosamente!");
                window.location.href = "/empleado_idiomas/empleado/${codigoEmpleado}/idiomas";
            </script>`
        );
    } catch (e) {
        console.log(e);
    }
}
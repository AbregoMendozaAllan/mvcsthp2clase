import {
    deleteEmpleado,
    getAllEmpleados,
    getEmpleadoById,
    insertEmpleado,
    updateEmpleado
} from "../config/empleadoDao.js";
import {dateParser, parseDatesInQueryResult} from "../utils/dateParser.js";


export const obtenerTodosLosEmpleados = async (req, res) => {
    try {
        const resultado = await getAllEmpleados();
        const empleados = parseDatesInQueryResult(resultado, "fecha_contratacion");
        res.render('empleados/empleadosView', { empleados });
    } catch (error) {
        console.log(error);
    }
}

export const crearEmpleado = async(req, res) => {
    try {
        await insertEmpleado(...Object.values(req.body));
        res.send('<script>alert("Empleado creado existosamente!"); window.location.href = "/empleados"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error empleado no fue creado!"); window.location.href = "/empleados"</script>');
    }
}

export const obtenerEmpleadoConVista = (viewPath) => {
    const obtenerEmpleado = async (req, res, viewPath) => {
        try {
            const [resultado] = await getEmpleadoById(req.params.codigo);
            const empleado = dateParser(resultado, "fecha_contratacion");
            res.render(viewPath, { empleado });
        } catch (e) {
            console.log(e);
            res.status(500).send("Error retrieving client data");
        }
    };
    return async (req, res) => {
        await obtenerEmpleado(req, res, viewPath);
    };
};

export const editarEmpleado = async(req, res) => {
    try {
        const empleado = { codigo: req.params.codigo, ...req.body };
        await updateEmpleado(...Object.values(empleado));
        res.send('<script>alert("Empleado modificado exitosamente"); window.location.href = "/empleados"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error al modificar empleado"); window.location.href = "/empleados"</script>');
    }
};

export const eliminarEmpleado = async(req, res) => {
    try {
        await deleteEmpleado(req.params.codigo);
        res.send('<script>alert("Empleado eliminado exitosamente"); window.location.href = "/empleados"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Empleado no se pudo eliminar"); window.location.href = "/empleados"</script>');
    }
}
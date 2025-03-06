import {
    deleteCliente,
    getAllClientes,
    getClienteById,
    insertCliente,
    updateCliente
} from "../config/clienteDao.js";

export const obtenerTodosClientes = async (req, res) => {
    try {
        const clientes = await getAllClientes();
        res.render('clientes/clientesView', { clientes });
    } catch (error) {
        console.log(error);
    }
}

export const crearCliente = async(req, res) => {
    try {
        await insertCliente(...Object.values(req.body));
        res.send('<script>alert("Cliente creado existosamente!"); window.location.href = "/clientes"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error cliente no fue creado!"); window.location.href = "/clientes"</script>');
    }
}

export const obtenerClienteConVista = (viewPath) => {
    const obtenerCliente = async (req, res, viewPath) => {
        try {
            const [cliente] = await getClienteById(req.params.codigo);
            res.render(viewPath, { cliente });
        } catch (e) {
            console.log(e);
            res.status(500).send("Error retrieving client data");
        }
    };
    return async (req, res) => {
        await obtenerCliente(req, res, viewPath);
    };
};

export const editarCliente = async(req, res) => {
    try {
        const cliente = { codigo: req.params.codigo, ...req.body };
        await updateCliente(...Object.values(cliente));
        res.send('<script>alert("Cliente modificado exitosamente"); window.location.href = "/clientes"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Error al modificar cliente"); window.location.href = "/clientes"</script>');
    }
};

export const eliminarCliente = async(req, res) => {
    try {
        await deleteCliente(req.params.codigo);
        res.send('<script>alert("Cliente eliminado exitosamente"); window.location.href = "/clientes"</script>');
    } catch (e) {
        console.log(e);
        res.send('<script>alert("Cliente no se pudo eliminar"); window.location.href = "/clientes"</script>');
    }
}
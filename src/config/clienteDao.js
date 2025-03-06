import {executeQuery} from "./db.js";

export const getAllClientes = async () => {
    const query = `SELECT * FROM clientes`;
    return await executeQuery(query);
}

export const insertCliente = async(nombre, apellido, edad, telefono, ciudad) => {
    const query = `
        INSERT INTO clientes (nombre, apellido, edad, telefono, ciudad) VALUES (?, ?, ?, ?, ?)
    `;
    const params = [nombre, apellido, edad, telefono, ciudad];
    return await executeQuery(query, params);
}

export const getClienteById = async (codigo) => {
    const query = `SELECT * FROM clientes WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}

export const updateCliente = async(codigo, nombre, apellido, edad, telefono, ciudad) => {
    const query = `UPDATE clientes SET nombre = ?, apellido = ?, edad = ?, telefono = ?, ciudad = ? WHERE codigo = ?`;
    const params = [nombre, apellido, edad, telefono, ciudad, codigo];
    return await executeQuery(query, params);
}

export const deleteCliente = async(codigo) => {
    const query = `DELETE FROM clientes WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}
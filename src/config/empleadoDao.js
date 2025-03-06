import {executeQuery} from "./db.js";

export const getAllEmpleados = async () => {
    const query = `SELECT * FROM empleados`;
    return await executeQuery(query);
}

export const insertEmpleado = async(nombre, apellido, fecha_contratacion, sueldo, telefono) => {
    const query = `
        INSERT INTO empleados (nombre, apellido, fecha_contratacion, sueldo, telefono) VALUES (?, ?, ?, ?, ?)
    `;
    const params = [nombre, apellido, fecha_contratacion, sueldo, telefono];
    return await executeQuery(query, params);
}

export const getEmpleadoById = async (codigo) => {
    const query = `SELECT * FROM empleados WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}

export const updateEmpleado = async(codigo, nombre, apellido, fecha_contratacion, sueldo, telefono) => {
    const query = `UPDATE empleados SET nombre = ?, apellido = ?, fecha_contratacion = ?,  sueldo = ?, telefono = ? WHERE codigo = ?`;
    const params = [nombre, apellido, fecha_contratacion, sueldo, telefono, codigo];
    return await executeQuery(query, params);
}

export const deleteEmpleado = async(codigo) => {
    const query = `DELETE FROM empleados WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}
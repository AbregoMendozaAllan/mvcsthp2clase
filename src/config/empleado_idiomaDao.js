import {executeQuery} from "./db.js";

export const getAllEmpleadosWithIdiomas = async () => {
    const query = `
        SELECT ei.codigo_empleado, CONCAT(e.nombre, ' ', e.apellido) AS Nombre, ei.codigo_idioma, i.idioma, ei.fecha
        FROM empleado_idioma ei
            JOIN empleados e ON ei.codigo_empleado = e.codigo
            JOIN idiomas i ON ei.codigo_idioma = i.codigo
`;
    return await executeQuery(query);
}

export const insertEmpleadoIdioma = async(codigoEmpleado, codigoIdioma, fecha) => {
    const query = `
        INSERT INTO empleado_idioma (codigo_empleado, codigo_idioma, fecha) VALUES (?, ?, ?)
    `;
    const params = [codigoEmpleado, codigoIdioma, fecha];
    return await executeQuery(query, params);
}

export const getIdiomasByEmpleadoId = async (codigoEmpleado) => {
    const query = `
        SELECT ei.codigo_empleado, CONCAT(e.nombre, ' ', e.apellido) AS nombre, ei.codigo_idioma, i.idioma, ei.fecha
        FROM empleado_idioma ei
            JOIN idiomas i ON ei.codigo_idioma = i.codigo
            JOIN empleados e ON ei.codigo_empleado = e.codigo
        WHERE ei.codigo_empleado = ?
    `;
    const param = [codigoEmpleado];
    return await executeQuery(query, param);
}

export const getIdiomasNotAsigned = async (codigoEmpleado) => {
    const query = `
        SELECT i.codigo, i.idioma
        FROM idiomas i
        WHERE i.codigo NOT IN (
            SELECT ei.codigo_idioma FROM empleado_idioma ei WHERE ei.codigo_empleado = ?
        )
    `;
    const params = [codigoEmpleado];
    return await executeQuery(query, params);
};

export const deleteIdiomFromEmpleado = async (codigoEmpleado, codigoIdioma) => {
    const query = `
        DELETE FROM empleado_idioma ei WHERE ei.codigo_empleado = ? AND ei.codigo_idioma = ?
    `;
    const params = [codigoEmpleado, codigoIdioma];
    return await executeQuery(query, params);
}

export const getEmpleadoIdiomaByEmpleadoIdAndIdiomaId = async (codigoEmpleado, codigoIdioma) => {
    const query = `
        SELECT ei.codigo_empleado, ei.codigo_idioma, i.idioma, ei.fecha FROM empleado_idioma ei
            JOIN idiomas i ON ei.codigo_idioma = i.codigo
        WHERE ei.codigo_empleado = ? AND ei.codigo_idioma = ?
    `;
    const params = [codigoEmpleado, codigoIdioma];
    return await executeQuery(query, params);
}

export const updateFecha = async(fecha, codigoEmpleado, codigoIdioma) => {
    const query = `UPDATE empleado_idioma SET fecha = ? WHERE codigo_empleado = ? AND codigo_idioma = ?`;
    const params = [fecha, codigoEmpleado, codigoIdioma];
    return await executeQuery(query, params);
}


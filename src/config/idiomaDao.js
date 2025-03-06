import {executeQuery} from "./db.js";

export const getAllIdiomas = async () => {
    const query = `SELECT * FROM idiomas`;
    return await executeQuery(query);
}

export const insertIdioma = async(idioma) => {
    const query = `
        INSERT INTO idiomas (idioma) VALUES (?)
    `;
    const params = [idioma];
    return await executeQuery(query, params);
}

export const getIdiomaById = async (codigo) => {
    const query = `SELECT * FROM idiomas WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}

export const updateIdioma = async(idioma, codigo) => {
    const query = `UPDATE idiomas SET idioma = ? WHERE codigo = ?`;
    const params = [idioma, codigo];
    return await executeQuery(query, params);
}

export const deleteIdioma = async(codigo) => {
    const query = `DELETE FROM idiomas WHERE codigo = ?`;
    const param = [codigo];
    return await executeQuery(query, param);
}
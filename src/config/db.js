import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// ya que estamos usando /promise en el import vamos a crear un pool de conexiones y no el metodo normal
// que es mysql.createConnection(); ya que vamos a usar async.
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "seminario",
    connectionLimit: 5,
});

export const executeQuery = async (query, params) => {
    // [row] destructuring el resultado para obtener el primer indice, el primer indice es el que tiene el resultado de la consulta SQL
    const [row] = await pool.query(query, params);
    return row;
}

export const testConnection = async () => {
    try {
        const conn = await pool.getConnection();
        console.log("Conexion Exitosa");
        conn.release();
    } catch (e) {
        console.error(`Se presento un error: ${e}`);
        throw e;
    }
}
import express from 'express';
import dotenv from 'dotenv';
import clienteRouter from "./routes/clienteRoutes.js";
import empleadoRouter from "./routes/empleadoRoutes.js";
import idiomaRouter from "./routes/idiomaRoutes.js";
import indexRouter from "./routes/indexRoutes.js";
import empleado_idomaRouter from "./routes/empleado_idomaRoutes.js";
import {testConnection} from "./config/db.js";

dotenv.config();
const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/clientes', clienteRouter);
app.use('/empleados', empleadoRouter);
app.use('/idiomas', idiomaRouter);
app.use('/index', indexRouter);
app.use('/empleado_idiomas', empleado_idomaRouter);

app.use('/static', express.static('public'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started. http://localhost:${port}/index`);
})

testConnection();
import express, {type Request, type Response} from "express";
import { json } from "stream/consumers";
import { AppRoutes } from "./routers/routes.js";
// PUNTO DE ENTRADA

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(AppRoutes.routes);

app.listen(PORT,()=>{
    console.log("Servidor Corriendo");
})
import express, {type Request, type Response} from "express";
import { json } from "stream/consumers";
import cors from 'cors';
import { AppRoutes } from "./routers/routes.js";
// PUNTO DE ENTRADA

const app = express();

const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:4200'
  }));


app.use(express.json());

app.use(AppRoutes.routes);

app.listen(PORT,()=>{
    console.log("Servidor Corriendo");
})
import express, {type Request, type Response} from "express";
import { json } from "stream/consumers";
import cors from 'cors';
import { AppRoutes } from "./routers/routes.js";
import session from 'express-session';
// PUNTO DE ENTRADA

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:4200', 
  credentials: true
}));

app.use(session({
  secret: 'miSecretoSuperSeguro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, 
    secure: false, 
    maxAge: 1000 * 60 * 60 
  }
}));

app.use(AppRoutes.routes);

app.listen(PORT,()=>{
    console.log(`Servidor Corriendo en el servidor: http://localhost:${PORT}`);
})
import { Router } from "express";
import { usuarioRouter } from "./usuario.router/usuario.router.js";


export class AppRoutes{

    static get routes():Router{
        const router = Router();

        router.use('/api', usuarioRouter);

        return router;
    }

}
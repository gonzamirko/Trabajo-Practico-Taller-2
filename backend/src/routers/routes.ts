import { Router } from "express";
import { usuarioRouter } from "./usuario.router/usuario.router.js";
import { loginRouter } from "./usuario.router/login.router.js";


export class AppRoutes{

    static get routes():Router{
        const router = Router();

        router.use('/api', usuarioRouter);
        router.use('/api',loginRouter)

        return router;
    }

}
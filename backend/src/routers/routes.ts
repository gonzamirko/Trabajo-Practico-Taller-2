import { Router } from "express";
import { usuarioRouter } from "./usuario.router/usuario.router.js";
import { loginRouter } from "./usuario.router/login.router.js";
import { registerRouter } from "./usuario.router/register.router.js";
import productoRoutes from "../routers/usuario.router/producto.router.js";



export class AppRoutes{

    static get routes():Router{
        const router = Router();

        router.use('/api', usuarioRouter);
        router.use('/api',loginRouter);
        router.use('/api', registerRouter);
        router.use('/api',productoRoutes);
        return router;
    }

}
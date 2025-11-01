import {Router} from "express";
import { UsuarioController } from "../../controllers/usuario.controller";

const loginRouter = Router();

const usuarioController = new UsuarioController();

loginRouter.post('/login',usuarioController.login.bind(usuarioController)
);

export { loginRouter };
import { Router } from "express";
import { UsuarioController } from "../../controllers/usuario.controller";

const registerRouter = Router();

const usuarioController = new UsuarioController();

registerRouter.post('/register', usuarioController.register.bind(usuarioController));

export { registerRouter };
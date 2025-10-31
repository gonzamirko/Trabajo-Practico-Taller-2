import {Router} from "express";
import { UsuarioController } from "../../controllers/usuario.controller";

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.get('/usuario/:id',usuarioController.getUsuario.bind(usuarioController));

export { usuarioRouter };
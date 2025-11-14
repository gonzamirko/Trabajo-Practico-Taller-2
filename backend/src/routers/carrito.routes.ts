import { Router } from "express";
import { CarritoController } from "../controllers/carrito.controller.js";

const router = Router();
const controller = new CarritoController();

router.post("/", controller.agregar);                  
router.get("/:idUsuario", controller.obtener);         
router.delete("/:idCarrito", controller.eliminar);     

export default router;

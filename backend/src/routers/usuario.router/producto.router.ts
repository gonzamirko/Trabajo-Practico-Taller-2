import { Router } from "express";
import { obtenerProductos, obtenerProductoPorId } from "../../controllers/producto.controller.js";

const router = Router();

// Obtener todos
router.get("/productos", obtenerProductos);

// Obtener uno por ID
router.get("/productos/:id", obtenerProductoPorId);

export default router;

import { Request, Response } from "express";
import { CarritoService } from "../services/carrito.service";

const carritoService = new CarritoService();

export class CarritoController {

  async agregar(req: Request, res: Response) {
    try {
      const { idProducto, idUsuario } = req.body;

      const resultado = await carritoService.agregar(idProducto, idUsuario);
      res.json(resultado);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al agregar al carrito" });
    }
  }

  async obtener(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.idUsuario);
      const resultado = await carritoService.obtenerPorUsuario(idUsuario);
      res.json(resultado);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener carrito" });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const idCarrito = Number(req.params.idCarrito);
      await carritoService.eliminar(idCarrito);
      res.json({ mensaje: "Producto eliminado del carrito" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar" });
    }
  }

}

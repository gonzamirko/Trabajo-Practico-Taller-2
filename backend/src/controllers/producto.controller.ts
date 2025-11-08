import { Request, Response } from "express";
import { ProductoRepository } from "../repository/producto.repository";

const productoRepository = new ProductoRepository();

export async function obtenerProductos(req: Request, res: Response) {
    try {
        const productos = await productoRepository.verTodosLosProductos();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener productos" });
    }
}

export const obtenerProductoPorId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const producto = await productoRepository.verProductoPorId(id);

    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(producto);

  } catch (error) {
    res.status(500).json({ message: "Error al obtener producto" });
  }
};



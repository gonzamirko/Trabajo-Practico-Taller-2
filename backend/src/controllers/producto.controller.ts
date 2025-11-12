
import {ProductoService} from "../services/producto.service";
import {Request,Response} from "express";
import {ProductoRepository} from "../repository/producto.repository";

const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);

export class ProductoController {


    /* public getProductos = async(req:Request,res:Response)=>{
        try {
            const productos = await productoService.obtenerTodosLosProductos();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({message:"error",error})
        }   
    }*/

        public getProductos = async (req: Request, res: Response) => {
  try {
    const { nombre, clasificacion, precioMin, precioMax } = req.query;

    const filtros: any = {};

    if (nombre) {
     // filtros.nombre = { contains: String(nombre), mode: "insensitive" };
      filtros.nombre = { contains: String(nombre).toLowerCase() };
    }

    if (clasificacion) {
      filtros.clasificacion = { contains: String(clasificacion).toLowerCase() };
    }

    if (precioMin || precioMax) {
      filtros.precio = {};

      if (precioMin) filtros.precio.gte = Number(precioMin);
      if (precioMax) filtros.precio.lte = Number(precioMax);
    }

    const productos = await productoService.filtrarProductos(filtros);
    res.status(200).json(productos);

  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
};


    public getProductoById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({ error: "ID de producto inválido" });
            }

            const producto = await productoService.obtenerProductoPorId(id); 

            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }

            res.status(200).json(producto);
        } catch (error) {
            console.error("Error en getProductoById:", error);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    }





}
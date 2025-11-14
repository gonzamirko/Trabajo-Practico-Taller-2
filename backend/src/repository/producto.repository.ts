import { prisma } from "../prisma.js";
import { Producto } from "../../shared/producto.js";


export class ProductoRepository {

    async getAllProductos(): Promise<Producto[]> {
        return await prisma.producto.findMany();
    }

    async findProductoById(id:number): Promise<Producto | null> {
        return await prisma.producto.findUnique({
            where: { id: id }
        });
    }

    async filtrar(filtros: any): Promise<Producto[]> {
  return await prisma.producto.findMany({
    where: filtros
  });
}


}
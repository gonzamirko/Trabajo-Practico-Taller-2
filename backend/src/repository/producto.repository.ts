import { prisma } from "../prisma";
import { Producto } from "../../shared/producto";


export class ProductoRepository {

    async getAllProductos(): Promise<Producto[]> {
        return await prisma.producto.findMany();
    }

    async findProductoById(id:number): Promise<Producto | null> {
        return await prisma.producto.findUnique({
            where: { id: id }
        });
    }

}
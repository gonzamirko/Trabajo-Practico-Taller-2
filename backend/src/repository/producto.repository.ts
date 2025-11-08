import { prisma } from "../prisma";

export class ProductoRepository{

   async verTodosLosProductos() {
        return await prisma.producto.findMany();
    }

    async verProductoPorId(id:number) {
        return await prisma.producto.findUnique({
            where: { id: id }
        });
    }
}
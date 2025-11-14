import { prisma } from "../prisma.js";

export class CarritoRepository {

  async agregar(idProducto: number, idUsuario: number) {
    return await prisma.carrito.create({
      data: {
        idProducto,
        idUsuario
      }
    });
  }

  async obtenerPorUsuario(idUsuario: number) {
    return await prisma.carrito.findMany({
      where: { idUsuario },
      include: {
        producto: true
      }
    });
  }

  async eliminar(idCarrito: number) {
    return await prisma.carrito.delete({
      where: { id: idCarrito }
    });
  }
}

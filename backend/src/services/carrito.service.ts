import { CarritoRepository } from "../repository/carrito.repository.js";

export class CarritoService {
  
  carritoRepo = new CarritoRepository();

  async agregar(idProducto: number, idUsuario: number) {
    return await this.carritoRepo.agregar(idProducto, idUsuario);
  }

  async obtenerPorUsuario(idUsuario: number) {
    return await this.carritoRepo.obtenerPorUsuario(idUsuario);
  }

  async eliminar(idCarrito: number) {
    return await this.carritoRepo.eliminar(idCarrito);
  }

}

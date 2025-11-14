import {ProductoRepository} from "../repository/producto.repository.js";
import {Producto} from "../../shared/producto.js";


export class ProductoService {

    constructor( private productoRepository:ProductoRepository) {}


    async obtenerTodosLosProductos(): Promise<Producto[]> {
        return await this.productoRepository.getAllProductos();
    }

    async obtenerProductoPorId(id:number){
        return await this.productoRepository.findProductoById(id);  
    }

    async filtrarProductos(filtros: any): Promise<Producto[]> {
  return await this.productoRepository.filtrar(filtros);
}

}
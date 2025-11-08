import{ProductoRepository}from '../repository/producto.repository';

export class ProductoServicio{
    constructor(private productoRepository:ProductoRepository){

    }
      async obtenerProductos(){
        return await this.productoRepository.verTodosLosProductos();
    }

    async verProductoPorId(id:number) {
        // Validación básica
        if (!id || isNaN(id)) {
            throw new Error("ID de producto inválido");
        }

        const producto = await this.productoRepository.verProductoPorId(Number(id));

        
        return producto;
    }
}
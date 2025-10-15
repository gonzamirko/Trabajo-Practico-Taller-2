import { Injectable } from '@angular/core';
import { IProducto } from './i-producto';

@Injectable({
  providedIn: 'root'
})

export class ServicioProducto {

  productos: IProducto[] = [
      {
        id: 1,
        nombre: "Nike Air Force 1",
        descripcion: "Las Nike Air Force 1 son un clásico atemporal, combinan estilo urbano con gran comodidad gracias a su amortiguación de aire en la suela y su diseño resistente.",
        clasificacion: "Deportivo / Casual",
        precio: 32000,
        rutaImagen: "img/nike_air_force_1.webp"
      },
      {
        id: 2,
        nombre: "Adidas Ultraboost",
        descripcion: "Las Adidas Ultraboost ofrecen una experiencia de carrera superior, con máxima amortiguación y retorno de energía.",
        clasificacion: "Running / Deportivo",
        precio: 45000,
        rutaImagen: "img/adidas_ultraboost.jpg"
      },
      {
        id: 3,
        nombre: "Puma RS-X",
        descripcion: "Las Puma RS-X combinan diseño retro con tecnología moderna, ofreciendo una pisada cómoda y estable.",
        clasificacion: "Casual / Deportivo",
        precio: 28000,
        rutaImagen: "img/puma_rsx.avif"
      }
    ];

    public ServicioProducto() { }

    getProductos(): IProducto[] {
      return this.productos;
    }
    
    trackById(index: number, producto: IProducto) {
    return producto.id;
  }
}

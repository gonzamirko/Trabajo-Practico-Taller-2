import { Component } from '@angular/core';
import { IProducto } from './i-producto';

@Component({
  selector: 'app-lista-productos',
  //imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos  {


   productos: IProducto[] = [
  {
    id: 1,
    nombre: "Nike Air Force 1",
    descripcion: "Las Nike Air Force 1 son un clásico atemporal, combinan estilo urbano con gran comodidad gracias a su amortiguación de aire en la suela y su diseño resistente. Perfectas para usar todos los días y lucir un look casual y moderno.",
    clasificacion: "Deportivo / Casual",
    precio: 32000,
    rutaImagen: "assets/img/nike_air_force_1.webp"
  },
  {
    id: 2,
    nombre: "Adidas Ultraboost",
    descripcion: "Las Adidas Ultraboost ofrecen una experiencia de carrera superior, con máxima amortiguación y retorno de energía. Su parte superior de malla transpirable proporciona comodidad y ajuste perfecto para largas caminatas o entrenamientos intensos.",
    clasificacion: "Running / Deportivo",
    precio: 45000,
    rutaImagen: "assets/img/adidas_ultraboost.jpg"
  },
  {
    id: 3,
    nombre: "Puma RS-X",
    descripcion: "Las Puma RS-X combinan diseño retro con tecnología moderna, ofreciendo una pisada cómoda y estable. Ideales para quienes buscan estilo y funcionalidad en un calzado urbano, destacando en cualquier outfit casual.",
    clasificacion: "Casual / Deportivo",
    precio: 28000,
    rutaImagen: "assets/img/puma_rsx.avif"
  }
];




}


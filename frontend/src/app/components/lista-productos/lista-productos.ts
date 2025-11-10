import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from './i-producto';
import { RouterLink } from '@angular/router';
import { ProductoServicio } from '../../api/services/productos/producto.service';
import { Observable } from 'rxjs'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css'],
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule]
})
export class ListaProductos implements OnInit {


  productos$: Observable<IProducto[]> | undefined;

  constructor(private productoServicio: ProductoServicio) {}

  /*ngOnInit(): void {
   
    this.productos$ = this.productoServicio.obtenerProductos();
   

  }*/
nombre: string = "";
clasificacion: string = "";
precioMin?: number;
precioMax?: number;

ngOnInit(): void {
  this.cargarProductos();
}

cargarProductos() {
  this.productos$ = this.productoServicio.obtenerProductos();
}

filtrar() {
  const filtros: any = {};

  if (this.nombre) filtros.nombre = this.nombre;
  if (this.clasificacion) filtros.clasificacion = this.clasificacion;
  if (this.precioMin) filtros.precioMin = this.precioMin;
  if (this.precioMax) filtros.precioMax = this.precioMax;

  this.productos$ = this.productoServicio.obtenerProductos(filtros);
}





}

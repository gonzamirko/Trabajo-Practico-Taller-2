import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProducto } from '../../services/servicio-producto/i-producto';
import { ServicioProducto } from '../../services/servicio-producto/servicio-producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css'],
  standalone: true,
  imports: [CommonModule,RouterLink]
})
export class ListaProductos {

  productos: IProducto[] = [];

  constructor(private servicioProductos: ServicioProducto) { 
    this.productos = this.servicioProductos.getProductos();
  }
 
  trackById(index: number, item: IProducto): any {
    return this.servicioProductos.trackById(index, item);
  }
}

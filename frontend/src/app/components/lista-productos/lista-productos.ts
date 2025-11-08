import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from './i-producto';
import { RouterLink } from '@angular/router';
import { ProductoServicio } from '../../api/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ListaProductos implements OnInit {

  productos: IProducto[] = [];

  constructor(private productoServicio: ProductoServicio) {}

  ngOnInit(): void {
    this.productoServicio.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }
}


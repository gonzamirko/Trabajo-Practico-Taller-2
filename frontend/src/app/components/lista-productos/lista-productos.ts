import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from './i-producto';
import { RouterLink } from '@angular/router';
import { ProductoServicio } from '../../api/services/productos/producto.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ListaProductos implements OnInit {


  productos$: Observable<IProducto[]> | undefined;

  constructor(private productoServicio: ProductoServicio) {}

  ngOnInit(): void {
   
    this.productos$ = this.productoServicio.obtenerProductos();
   

  }

}

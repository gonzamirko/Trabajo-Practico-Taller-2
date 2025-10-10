import { Component } from '@angular/core';
import { IProducto } from './i-producto';

@Component({
  selector: 'app-lista-productos',
  //imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos  {


  productos: IProducto[] =[{id:1,nombre:"bebida",descripcion:"lalala",clasificacion:"muy bueno",precio:2},
    {id:2,nombre:"bebida",descripcion:"lalala",clasificacion:"muy bueno",precio:2},
    {id:3,nombre:"bebida",descripcion:"lalala",clasificacion:"muy bueno",precio:2}
  ];




}


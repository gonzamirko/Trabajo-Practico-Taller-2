// producto-detalle.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { ListaProductos } from '../lista-productos/lista-productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})
export class ProductoDetalle implements OnInit {
  producto: IProducto | undefined;
  productos: IProducto[] = new ListaProductos().productos;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.producto = this.productos.find(p => p.id === id);
    });
  }

  agregarAlCarrito() {

  }

  comprarAhora() {
    
  }
}

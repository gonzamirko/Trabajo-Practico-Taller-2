// producto-detalle.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../../services/servicio-producto/i-producto';
import { ServicioProducto } from '../../services/servicio-producto/servicio-producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})
export class ProductoDetalle implements OnInit {
  producto: IProducto | undefined;
  servicioProducto = new ServicioProducto();
  productos: IProducto[] = this.servicioProducto.getProductos();

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

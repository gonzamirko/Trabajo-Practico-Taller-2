import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProducto } from '../../services/servicio-producto/i-producto';
import { ServicioProducto } from '../../services/servicio-producto/servicio-producto';
import { ServicioCarrito } from '../../services/servicio-carrito/servicio-carrito';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})

export class ProductoDetalle implements OnInit {
  producto: IProducto | undefined;

  constructor(
    private route: ActivatedRoute,
    private servicioProducto: ServicioProducto,
    private servicioCarrito: ServicioCarrito,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(map => {
    const id = Number(map.get('id'));
    this.producto = this.servicioProducto.getProductoPorId(id);
  });
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.servicioCarrito.agregarProducto(this.producto);
      this.router.navigate(['/carrito']);
    }
  }

  comprarAhora() {}
}

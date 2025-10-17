import { Component, OnInit } from '@angular/core';
import { ServicioCarrito } from '../../services/servicio-carrito/servicio-carrito';
import { IProducto } from '../../services/servicio-producto/i-producto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicioProducto } from '../../services/servicio-producto/servicio-producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class Carrito implements OnInit {

  productosCarrito: IProducto[] = [];
  producto?: IProducto;

  constructor(
    private servicioCarrito: ServicioCarrito,
    private route: ActivatedRoute,
    private servicioProducto: ServicioProducto
  ) {}

  ngOnInit(): void {
    this.cargarProductosCarrito();
    this.obtenerProductoDesdeRuta();
  }

  cargarProductosCarrito(): void {
    this.servicioCarrito.obtenerProductos().subscribe(productos => {
      this.productosCarrito = productos;
    });
  }

  obtenerProductoDesdeRuta(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.producto = this.servicioProducto.getProductoPorId(id);
      }
    });
  }
  
  eliminar(producto : IProducto): void {
    this.servicioCarrito.eliminarProducto(producto);
    this.cargarProductosCarrito();
  }

}
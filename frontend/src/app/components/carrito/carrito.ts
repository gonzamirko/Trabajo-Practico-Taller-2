import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../api/services/carrito/carrito';
import { AuthService } from '../../api/services/auth.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
})
export class Carrito implements OnInit {
  productosCarrito: any[] = [];
  idUsuario!: number;

  constructor(
    private carritoService: CarritoService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    console.log('[Carrito] ngOnInit iniciado');

    this.carritoService.carrito$.subscribe((productos) => {
      this.productosCarrito = productos.map((item) => ({
        idCarrito: item.id,
        ...item.producto,
      }));
    });

    this.authService.user$.subscribe((user) => {
      console.log('[Carrito] Usuario del AuthService:', user);
      if (user && user.id_usuario) {
        this.idUsuario = user.id_usuario;
        this.cargarCarrito();
      } else {
        this.productosCarrito = [];
      }
    });
  }

  cargarCarrito() {
    if (this.idUsuario) {
      this.carritoService.cargarCarrito(this.idUsuario).subscribe();
    } else {
      console.warn('[Carrito] No hay idUsuario disponible');
    }
  }
  eliminar(idCarrito: number) {
    this.carritoService.eliminar(idCarrito, this.idUsuario).subscribe({
      error: (err) => console.error('Error eliminando', err),
    });
  }

  trackById(_index: number, item: any) {
    return item.idCarrito ?? item.id;
  }
}

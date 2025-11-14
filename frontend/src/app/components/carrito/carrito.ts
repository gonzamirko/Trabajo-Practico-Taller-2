import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../api/services/carrito/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito implements OnInit {

  productosCarrito: any[] = [];
  idUsuario!: number;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
  const raw = localStorage.getItem('usuario');
  if (!raw) return;

  const usuario = JSON.parse(raw);
  this.idUsuario = usuario.id_usuario; 

  this.cargarCarrito();
}


  cargarCarrito() {
    this.carritoService.obtenerCarrito(this.idUsuario).subscribe({
      next: (resp) => {
        this.productosCarrito = resp.map((item: any) => ({
          idCarrito: item.id,
          ...item.producto
        }));
      },
      error: (err) => {
        console.error('Error cargando carrito', err);
      }
    });
  }

  eliminar(idCarrito: number) {
    this.carritoService.eliminar(idCarrito).subscribe({
      next: () => this.cargarCarrito(),
      error: (err) => console.error('Error eliminando', err)
    });
  }

  trackById(_index: number, item: any) {
    return item.idCarrito ?? item.id;
  }

}

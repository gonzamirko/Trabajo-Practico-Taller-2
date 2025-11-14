import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductoServicio } from '../../api/services/productos/producto.service';
import { CarritoService } from '../../api/services/carrito/carrito';
import { AuthService } from '../../api/services/auth.service';


@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})

export class ProductoDetalle implements OnInit {

  producto$: Observable<IProducto | undefined>;
  user: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoServicio: ProductoServicio,
    private carritoServicio: CarritoService,
    private auth: AuthService
  ) {

    this.producto$ = new Observable<IProducto | undefined>();
  }

  ngOnInit(): void {
    this.auth.loadSession();
    this.producto$ = this.route.paramMap.pipe(
        switchMap(map => {
            const id = Number(map.get('id'));
            return this.productoServicio.verProductoPorId(id);
        })
    );

    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }  
  
    agregarAlCarrito(idProducto: number) {
    
    if (!this.user) {
      alert('Tenés que iniciar sesión');
      return;
    }
    
    const idUsuario = this.user.id_usuario;

    this.carritoServicio.agregar(idProducto, idUsuario).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.router.navigate(['/carrito']);
        }, 500);
      },
      error: (err) => {
        alert('Error al agregar al carrito: ' + (err.error?.error || err.message));
      }
    });
  }
}
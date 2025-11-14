import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductoServicio } from '../../api/services/productos/producto.service';
import { Carrito } from '../carrito/carrito';
import { CarritoService } from '../../api/services/carrito/carrito';


@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})

export class ProductoDetalle implements OnInit {
  producto$: Observable<IProducto | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoServicio: ProductoServicio,
private carritoServicio: CarritoService
  ) {

    this.producto$ = new Observable<IProducto | undefined>();
  }

  ngOnInit(): void {

    this.producto$ = this.route.paramMap.pipe(

        switchMap(map => {
            const id = Number(map.get('id'));
         
            return this.productoServicio.verProductoPorId(id);
        })
    );

  }

  get idUsuario(): number | null {
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuario') || 'null');
  if (usuarioLogueado) {
    return usuarioLogueado.id;
  }
  return null;
}

agregarAlCarrito(idProducto: number) {
  const usuarioRaw = localStorage.getItem('usuario');
  if (!usuarioRaw) {
    alert('Tenés que iniciar sesión');
    return;
  }
  const usuario = JSON.parse(usuarioRaw);
  const idUsuario = usuario.id_usuario;

  this.carritoServicio.agregar(idProducto, idUsuario).subscribe({
    next: () => {
      this.router.navigate(['/carrito']);
    },
    error: (err) => {
      console.error("Error al agregar al carrito", err);
    }
  });
}



  comprarAhora() {
   
  }
}

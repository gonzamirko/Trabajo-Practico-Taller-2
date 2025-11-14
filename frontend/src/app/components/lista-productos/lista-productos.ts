import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from './i-producto';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ProductoServicio } from '../../api/services/productos/producto.service';
import { Observable } from 'rxjs'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class ListaProductos implements OnInit {

  productos$: Observable<IProducto[]> | undefined;

  nombre: string = "";
  clasificacion: string = "";
  precioMin?: number;
  precioMax?: number;

  constructor(
    private productoServicio: ProductoServicio,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {

  const filtrosGuardados = localStorage.getItem("filtrosProductos");
  if (filtrosGuardados) {
    const f = JSON.parse(filtrosGuardados);
    this.nombre = f.nombre || "";
    this.clasificacion = f.clasificacion || "";
    this.precioMin = f.precioMin || undefined;
    this.precioMax = f.precioMax || undefined;
  }

  this.route.queryParams.subscribe(params => {
    this.nombre = params['nombre'] ?? this.nombre;
    this.clasificacion = params['clasificacion'] ?? this.clasificacion;
    this.precioMin = params['precioMin'] ? Number(params['precioMin']) : this.precioMin;
    this.precioMax = params['precioMax'] ? Number(params['precioMax']) : this.precioMax;

    this.cargarProductos();
  });
}


  cargarProductos() {
    const filtros: any = {};

    if (this.nombre) filtros.nombre = this.nombre;
    if (this.clasificacion) filtros.clasificacion = this.clasificacion;
    if (this.precioMin) filtros.precioMin = this.precioMin;
    if (this.precioMax) filtros.precioMax = this.precioMax;

    this.productos$ = this.productoServicio.obtenerProductos(filtros);
  }

  filtrar() {
  const filtros = {
    nombre: this.nombre,
    clasificacion: this.clasificacion,
    precioMin: this.precioMin,
    precioMax: this.precioMax
  };

  localStorage.setItem("filtrosProductos", JSON.stringify(filtros));

  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: filtros,
    queryParamsHandling: 'merge'
  });
}



  cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('filtrosProductos');
    this.router.navigate(['/login']);
  }

}

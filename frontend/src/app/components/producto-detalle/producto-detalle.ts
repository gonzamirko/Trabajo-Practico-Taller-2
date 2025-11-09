import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductoServicio } from '../../api/services/productos/producto.service';

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
    private productoServicio: ProductoServicio
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

  agregarAlCarrito(){
   
  }

  comprarAhora() {
   
  }
}

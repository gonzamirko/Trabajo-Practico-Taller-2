/*// producto-detalle.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { ListaProductos } from '../lista-productos/lista-productos';
import { CommonModule } from '@angular/common';
import { ProductoServicio } from '../../api/services/producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css'],
  imports: [CommonModule]
})
export class ProductoDetalle implements OnInit {
  producto: IProducto | undefined;
 

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
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProducto } from '../lista-productos/i-producto';
import { ProductoServicio } from '../../api/services/producto.service';

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
    private servicioProducto: ProductoServicio,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(map => {
    const id = Number(map.get('id'));
    
    this.servicioProducto.verProductoPorId(id).subscribe(p => {
      this.producto = p;
    });
  });
}

agregarAlCarrito(){
  
}
 

  comprarAhora() {}
}
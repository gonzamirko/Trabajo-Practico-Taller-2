import { Injectable } from '@angular/core';
import { IProducto } from '../servicio-producto/i-producto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarrito {

  private carrito: IProducto[] = [];
  private carrito$ = new BehaviorSubject<IProducto[]>([]);

  agregarProducto(producto: IProducto) {
    if (!this.carrito.find(p => p.id === producto.id)) {
      this.carrito.push(producto);
      this.carrito$.next([...this.carrito]); 
    }
  }

  eliminarProducto(producto: IProducto) {
    this.carrito = this.carrito.filter(p => p.id !== producto.id);
    this.carrito$.next([...this.carrito]);
  }

  obtenerProductos(): Observable<IProducto[]> {
    return this.carrito$.asObservable();
  }
}

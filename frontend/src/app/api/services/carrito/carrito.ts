import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:3000/api/carrito';
  
  //Vamos a usar obserbables para manejar el estado del carrito y que se actualice en tiempo real!!!
  //Asi no tenemos que refrescar manuelmanete jeje
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();
  private ultimoIdUsuario: number | null = null;

  constructor(private http: HttpClient) {}

  agregar(idProducto: number, idUsuario: number): Observable<any> {
  this.ultimoIdUsuario = idUsuario;

  return this.http.post<any>(this.apiUrl, {
    idProducto,
    idUsuario
  }).pipe(
    tap(() => {
      this.cargarCarrito(idUsuario);
    }),
    catchError((error) => {
      throw error;
    })
  );
}

  cargarCarrito(idUsuario: number): void {
  this.ultimoIdUsuario = idUsuario;

  this.obtenerCarrito(idUsuario).subscribe({
    next: (productos) => {
      this.carritoSubject.next(productos);
    },
    error: () => {
      this.carritoSubject.next([]);
    }
  });
}

obtenerCarrito(idUsuario: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/${idUsuario}`).pipe(
    catchError(() => of([]))
  );
}

eliminar(idCarrito: number, idUsuario: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${idCarrito}`).pipe(
    tap(() => {
      this.cargarCarrito(idUsuario);
    }),
    catchError((error) => {
      throw error;
    })
  );
}

getCarrito() {
  return this.carritoSubject.asObservable();
}

getUltimoIdUsuario() {
  return this.ultimoIdUsuario;
}
}


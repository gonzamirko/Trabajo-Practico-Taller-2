import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:3000/api/carrito';

  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  private ultimoIdUsuario: number | null = null;

  constructor(private http: HttpClient) {}

  // ➤ AGREGAR PRODUCTO AL CARRITO
  agregar(idProducto: number, idUsuario: number): Observable<any> {
    this.ultimoIdUsuario = idUsuario;

    return this.http.post<any>(this.apiUrl, { idProducto, idUsuario }).pipe(
      // Después de agregar → recarga automáticamente el carrito
      switchMap(() => this.cargarCarrito(idUsuario)),
      catchError(error => throwError(() => error))
    );
  }

  // ➤ ELIMINAR PRODUCTO DEL CARRITO
  eliminar(idCarrito: number, idUsuario: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idCarrito}`).pipe(
      switchMap(() => this.cargarCarrito(idUsuario)),
      catchError(error => throwError(() => error))
    );
  }

  // ➤ OBTENER CARRITO DESDE EL BACKEND
  obtenerCarrito(idUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${idUsuario}`).pipe(
      catchError(() => of([]))
    );
  }

  // ➤ CARGAR CARRITO Y ACTUALIZAR EL BEHAVIOR SUBJECT
  cargarCarrito(idUsuario: number): Observable<any[]> {
    this.ultimoIdUsuario = idUsuario;

    return this.obtenerCarrito(idUsuario).pipe(
      tap(productos => this.carritoSubject.next(productos)),
      catchError(() => {
        this.carritoSubject.next([]);
        return of([]);
      })
    );
  }

  // ➤ OBTENER ÚLTIMO ID DE USUARIO
  getUltimoIdUsuario() {
    return this.ultimoIdUsuario;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from './../../././../interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:3000/api/carrito';

  constructor(private http: HttpClient) {}

  agregar(idProducto: number, idUsuario: number) {
  return this.http.post(this.apiUrl, {
    idProducto,
    idUsuario
  });
}

  obtenerCarrito(idUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${idUsuario}`);
  }

  eliminar(idCarrito: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idCarrito}`);
  }
}


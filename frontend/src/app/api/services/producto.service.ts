import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../../components/lista-productos/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicio {
  
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.apiUrl);
  }


  verProductoPorId(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.apiUrl}/${id}`);
  }
}

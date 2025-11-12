import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../../../components/lista-productos/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicio {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

 /* obtenerProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.apiUrl);
  }*/

    obtenerProductos(filtros?: any): Observable<IProducto[]> {
  let params: any = {};

  if (filtros?.nombre) params.nombre = filtros.nombre;
  if (filtros?.clasificacion) params.clasificacion = filtros.clasificacion;
  if (filtros?.precioMin) params.precioMin = filtros.precioMin;
  if (filtros?.precioMax) params.precioMax = filtros.precioMax;

  return this.http.get<IProducto[]>(this.apiUrl, { params });
}


  verProductoPorId(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.apiUrl}/${id}`);
  }
}

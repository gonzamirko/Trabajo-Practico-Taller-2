import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export interface Usuario {
  id_usuario?: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasenia: string;
  direccion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.api_url}/usuario`;

  constructor(private http: HttpClient) {}

  register(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${environment.api_url}/login`, body);
  }

  register(usuario: Usuario){
    return this.http.post<any>(`${environment.api_url}/register`,usuario);
  }

  
}

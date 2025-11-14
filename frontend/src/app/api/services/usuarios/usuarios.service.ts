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
    return this.http.post(`${this.apiUrl}/register`, usuario, { withCredentials: true });
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  login(credentials: { email: string; contrasenia: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true });
  }

  getProfile() {
    return this.http.get(`${this.apiUrl}/perfil`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }

  



}

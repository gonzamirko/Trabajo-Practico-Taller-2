import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../../../components/usuario/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  http = inject(HttpClient);

  getUsuario(id_usuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api_url}/usuario/${id_usuario}`);
  }

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${environment.api_url}/login`, body);
  }
}

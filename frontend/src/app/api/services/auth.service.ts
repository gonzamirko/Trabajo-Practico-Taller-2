import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadSession() {
    this.http.get(`${environment.api_url}/usuario/perfil`, { withCredentials: true })
      .subscribe({
        next: (res: any) => this.userSubject.next(res.user),
        error: () => this.userSubject.next(null)
      });
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  logout() {
    return this.http.post(`${environment.api_url}/usuario/logout`, {}, { withCredentials: true });
  }
}

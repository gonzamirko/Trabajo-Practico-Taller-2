import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: '' // no necesita HTML
})
export class Logout implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 🔹 Borra la sesión del usuario y los filtros
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('filtrosProductos');

    // 🔹 Redirige al login
    this.router.navigate(['/login']);
  }
}

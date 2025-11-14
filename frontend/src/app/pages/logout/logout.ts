import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: '' 
})
export class Logout implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('filtrosProductos');

    
    this.router.navigate(['/login']);
  }
}

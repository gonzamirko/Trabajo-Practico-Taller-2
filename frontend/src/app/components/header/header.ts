import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{CommonModule} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}

  get usuario(): any {
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }
  

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('filtrosProductos');

    this.router.navigate(['/login']);
  }
}

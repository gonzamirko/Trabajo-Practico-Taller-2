import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  get nombreUsuario(): string | null{
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if(usuarioLogueado){
      const usuario = JSON.parse(usuarioLogueado);
      return usuario.nombre
    }
    return null;
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuarioLogueado');
  }
}

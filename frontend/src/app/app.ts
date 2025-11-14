import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { AuthService } from "./api/services/auth.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoPrueba');
  
  constructor(private authService: AuthService) {
    this.authService.loadSession();
  }

}

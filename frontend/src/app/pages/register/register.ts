import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../api/services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [UsuarioService],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  nombre = '';
  apellido = '';
  email = '';
  contrasenia = '';
  direccion = '';
  loading = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  registrarCliente() {
    if (this.loading) return;

    this.loading = true;

    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contrasenia: this.contrasenia,
      direccion: this.direccion
    };

    this.usuarioService.register(nuevoUsuario).subscribe({
      next: (res) => {
        this.loading = false;
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        alert(err.error?.error || 'Error al registrar el usuario');
      }
    });
  }
}

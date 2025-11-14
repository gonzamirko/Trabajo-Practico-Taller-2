import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [UsuarioService],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit, OnDestroy {
  activatedRouter = inject(ActivatedRoute);
  usuario!: Usuario;

  email: string = '';
  contrasenia: string = '';
  loading = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  login() {
    if (this.loading) return;
    this.loading = true;

    const body = {
      email: this.email,
      contrasenia: this.contrasenia
    };

    this.usuarioService.login(body).subscribe({
      next: (res: any) => {
        this.loading = true;  
        // Guardar datos en localStorage si querés
       // localStorage.setItem('usuario', JSON.stringify(res.usuario));
        alert('Inicio de sesión exitoso ✅'); 
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        alert(err.error?.error || 'Email o contraseña incorrectos');
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}

import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
import { AuthService } from '../../api/services/auth.service';
import { NotificationService } from "../../api/services/notification.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit, OnDestroy {
  activatedRouter = inject(ActivatedRoute);
  usuario!: Usuario;

  email: string = '';
  contrasenia: string = '';
  loading = false;
  mensaje: string | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}
  

  ngOnInit(): void {
    this.notificationService.currentMessage.subscribe(mensaje => {
      this.mensaje = mensaje;
    });
  }

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
        
      this.authService.loadSession();  
      this.authService.setUser(res.user); 
      this.notificationService.limpiarMensaje();
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

<<<<<<< HEAD
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component ,inject,OnDestroy,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { UsuariosService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
import { ActivatedRoute,RouterLinkActive,RouterLink } from '@angular/router';
=======
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
>>>>>>> origin/master

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [UsuarioService],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
<<<<<<< HEAD


export class Login implements OnDestroy,OnInit{

  activatedRouter = inject(ActivatedRoute);
  usuario !: Usuario;
=======
export class Login implements OnInit, OnDestroy {
  activatedRouter = inject(ActivatedRoute);
  usuario!: Usuario;
>>>>>>> origin/master

  email: string = '';
  contrasenia: string = '';
  loading = false;

<<<<<<< HEAD
  constructor(private usuariosService: UsuariosService,private cdr: ChangeDetectorRef,private router:Router) {
  }
  




  ngOnInit(): void {
 }

  ngOnDestroy(): void {
    
  }

  login(){
    
    const body ={
      email:this.email, 
      password:this.password};

    this.usuariosService.login(body).subscribe({

      next :(res:any) =>{
        alert(res.message);
        this.router.navigate(['/home'])
      },

        error: (err) => {
        console.error('Error al obtener usuario:', err);
      },

        complete:()=>{
        
      }


    })

  }


}
=======
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
        this.loading = false;
        alert('Inicio de sesión exitoso ✅');
        // Guardar datos en localStorage si querés
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
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
>>>>>>> origin/master

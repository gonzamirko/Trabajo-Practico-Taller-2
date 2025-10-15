import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private router : Router){}
  
ingresarAHome(){
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
  const usuarioEncontrado = usuariosGuardados.find((u: any) => 
    u.email === this.email && u.password === this.password);

  if(usuarioEncontrado){
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
    this.router.navigate(['/home']);
  }else{
    alert('Usuario o contraseña incorrecta');
  }
  
}

}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../components/usuario/usuario';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private router : Router){}

  
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  direccion: string = '';

  usuario = new Usuario();
  usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');

  registrarCliente(){

    const yaExiste = this.usuariosGuardados.some((u: Usuario) => u.email === this.email);

    if(yaExiste){
      alert('Usuario existente')
    }else{
      
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.email = this.email;
    this.usuario.password = this.password;
    this.usuario.direccion = this.direccion;
    this.usuariosGuardados.push(this.usuario);

    localStorage.setItem('usuarios', JSON.stringify(this.usuariosGuardados));
    this.router.navigate(['/login']);
    }
  }


}
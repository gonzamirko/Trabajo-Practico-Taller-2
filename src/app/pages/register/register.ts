import { Component, signal } from '@angular/core';
import { FormsModule,
  FormControl,
  FormGroup,
  Validator,
  ReactiveFormsModule,
  Validators
 } from '@angular/forms';
import { Usuario } from '../../components/usuario/usuario';
import { Router, RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';

 
@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: '../register/register.html',
  styleUrl: '../register/register.css'
})
export class Register {

 
  constructor(private router : Router){}  

 // Validamos que todos los parametros este completos 

  form = signal<FormGroup>(
    new FormGroup({
  nombre: new FormControl('', Validators.required),
  apellido: new FormControl('', Validators.required),
  email: new FormControl('',  [Validators.required, Validators.email]),
  password:new FormControl('', Validators.required),
  direccion: new FormControl('', Validators.required),
  })
)

formValue = this.form().value;

  usuario = new Usuario();
  usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');

 registrarCliente() {
  const yaExiste = this.usuariosGuardados.some((u: Usuario) => u.email === this.formValue.email);

  // CONSIGNA: Se requiere implementar validación de la complejidad de la contraseña proporcionada. No será posible utilizar el mismo mail para registrar múltiples usuarios.

  // condicion validación de la complejidad de la contraseña proporcionada 
  const condicionContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!condicionContra.test(this.form().get('password')?.value)) {
    alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo');
    return;
  }
 // condicion de mail duplicados
    if (yaExiste) {
    alert('Ya existe un usuario con este email');
    return;
  }


  this.usuario.nombre = this.formValue.nombre;
  this.usuario.apellido = this.formValue.apellido;
  this.usuario.email = this.formValue.email;
  this.usuario.password = this.formValue.password;
  this.usuario.direccion = this.formValue.direccion;

  this.usuariosGuardados.push(this.usuario);
  localStorage.setItem('usuarios', JSON.stringify(this.usuariosGuardados));

  alert('Usuario registrado con éxito');
  this.router.navigate(['/login']);
}

}
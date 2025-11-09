import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  usuarioService = inject(UsuariosService);

  form!: FormGroup;
  router = inject(Router)

  errorMessage: string = "";

  ngOnInit(): void {
    this.form = this.formBuilder.group(
     {
       nombre: ["",[Validators.required]],
       apellido: ["",[]],
       email: ["",[Validators.required, Validators.email]],
       contrasenia: ["",[Validators.required]],
       direccion: ["",[Validators.required]]
     }
    )
  }

  ngOnDestroy(): void {

  }

  registrarUsuario(){
     const usuario: Usuario = {
           nombre: this.form.get("nombre")?.value,
           apellido: this.form.get("apellido")?.value,
           email: this.form.get("email")?.value,
           contrasenia: this.form.get("contrasenia")?.value,
           direccion: this.form.get("direccion")?.value 
           } 
    
      this.usuarioService.register(usuario).subscribe({
          next: (res: any) => {
            this.errorMessage = '';
            alert(res.message);
            this.router.navigate(['/login']);
          },

          error: (error) => {
            if(this.form.invalid){
               this.form.markAllAsTouched();
               this.errorMessage = error?.error.message; 
            }
          },

          complete: () => {},
         
      });      
  }
}
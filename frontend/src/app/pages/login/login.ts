import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component ,inject,OnDestroy,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { UsuariosService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
import { ActivatedRoute,RouterLinkActive,RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login implements OnDestroy,OnInit{

  activatedRouter = inject(ActivatedRoute);
  usuario !: Usuario;

  email: string = '';
  password: string = '';

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
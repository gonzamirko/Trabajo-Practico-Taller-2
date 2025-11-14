import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import{CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from "../../api/services/usuarios/usuarios.service";
@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header implements OnInit {

  user: any = null;

  constructor(private router: Router, private usuarioService:UsuarioService) {}


  ngOnInit(): void {
    this.usuarioService.getProfile().subscribe({
      next: (res:any)=>{
        console.log("Respuesta getProfile:", res);
        this.user = res.user;
      },
      error:(err)=>{
        console.error("Error getProfile:", err);
        this.user = null;
      }
    });
  }
  

 // get usuario(): any {
   // return JSON.parse(localStorage.getItem('usuario') || 'null');

  cerrarSesion(): void {
    //localStorage.removeItem('usuario');
    //localStorage.removeItem('token');
    //localStorage.removeItem('filtrosProductos');
    this.usuarioService.logout().subscribe({
      next: (res:any)=>{
        this.user = null; 
        this.router.navigate(['/login']);
      }
    });
   
  }
}

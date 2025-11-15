import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../api/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.usuario.component.html',
  styleUrls: ['./detail.usuario.component.css']
})

export class DetailUsuarioComponent implements OnInit, OnDestroy {

  usuario: any = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
   
    this.auth.user$.subscribe(user => {
      this.usuario = user;
      console.log("Usuario logueado en perfil:", user);
    });

    this.auth.loadSession();
  }

  ngOnDestroy(): void {
    
  }

  cerrarSesion(): void {
    this.auth.logout().subscribe({
      next: (res:any)=>{
        this.auth.setUser(null);
        this.router.navigate(['/login']);
      }
    });

}}

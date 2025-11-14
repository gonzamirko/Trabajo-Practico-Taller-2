import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../api/services/auth.service";

@Component({
  selector: 'app-detail-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.usuario.component.html',
  styleUrls: ['./detail.usuario.component.css']
})

export class DetailUsuarioComponent implements OnInit, OnDestroy {

  usuario: any = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable para recibir actualizaciones automáticas
    this.auth.user$.subscribe(user => {
      this.usuario = user;
      console.log("Usuario logueado en perfil:", user);
    });

    // Cargar sesión si hay cookie activa
    this.auth.loadSession();
  }

  ngOnDestroy(): void {
    // Aquí podrías limpiar suscripciones si no usás async pipe
  }

}

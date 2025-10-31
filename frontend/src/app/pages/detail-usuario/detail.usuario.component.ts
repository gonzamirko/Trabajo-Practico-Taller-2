import { Component ,inject,OnDestroy,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../api/services/usuarios/usuarios.service';
import { Usuario } from '../../components/usuario/usuario';
import { ActivatedRoute,RouterLinkActive,RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-detail-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.usuario.component.html',
  styleUrls: ['./detail.usuario.component.css']

})


export class DetailUsuarioComponent implements OnDestroy,OnInit {

    constructor(private usuariosService: UsuariosService,private cdr: ChangeDetectorRef) {}

    id!:number;
    usuarioServicio = inject(UsuariosService);

    activatedRouter = inject(ActivatedRoute);
    usuario !: Usuario;


    ngOnInit(): void {
        this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
        this.getUsuario();
    }

    ngOnDestroy(): void {
        
    }

    getUsuario(){
        this.usuarioServicio.getUsuario(this.id).subscribe({
            next :(usuario:Usuario) =>{
                this.usuario= usuario;
                // refresca cambios sin el no muetsra nada 
                this.cdr.detectChanges();
            },

            error: (err) => {
                console.error('Error al obtener usuario:', err);
              },
            complete:()=>{
                
            }
        })

    }
   
}
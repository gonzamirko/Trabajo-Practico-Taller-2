import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import{CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from "../../api/services/auth.service";
@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header implements OnInit {

  user: any = null;

  constructor(private router: Router,private auth:AuthService) {}


  ngOnInit(): void {

    this.auth.user$.subscribe(user => {
      this.user = user;
      console.log("HEADER user:", user);
    });
  
    this.auth.loadSession();
  }

  cerrarSesion(): void {
    this.auth.logout().subscribe({
      next: (res:any)=>{
        this.user = null; 
        this.router.navigate(['/login']);
      }
    });
   
  }
}

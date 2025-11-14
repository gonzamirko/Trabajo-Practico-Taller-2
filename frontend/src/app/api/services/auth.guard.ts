import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,GuardResult,MaybeAsync,Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { take,map,filter } from "rxjs/operators";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,private router:Router,private notificationService : NotificationService) {}

    canActivate() {
        return this.authService.user$.pipe(
          filter(user => user !== undefined), 
         
          take(1), 
          map(user => {
            if (user) return true; 

            this.notificationService.mostarMensaje('Debe iniciar sesion para acceder a esta pagina');
            this.router.navigate(['/login']); 
            return false;
          })
        );
      }
    
}


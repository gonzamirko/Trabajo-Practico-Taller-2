import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecoverPassword } from '../recover-password/recover-password';

@Component({
  selector: 'app-login',
  imports: [RouterModule,RecoverPassword],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}

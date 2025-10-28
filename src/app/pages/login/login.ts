import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecoverPassword } from '../recover-password/recover-password';

@Component({
  selector: 'app-login',
  imports: [RouterModule,RecoverPassword,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login {
 
}


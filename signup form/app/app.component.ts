import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerForm: FormGroup;
  title = 'loginForm';
 loginmsg: String
 submitted = false;

  constructor() {

    
  }

   // convenience getter for easy access to form fields




 
}


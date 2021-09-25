import { AuthService, LoginModel } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  loginData: LoginModel = {
    username: '',
    password: ''
  };

  isLoggedIn = false;
  username = '';

  constructor(private readonly authService: AuthService) {

  }

  onSubmit(): void {
    this.authService.login(this.loginData)
      .subscribe((tokenData) => {
        this.isLoggedIn = true;
        this.username = tokenData.username;
      });
  }
}

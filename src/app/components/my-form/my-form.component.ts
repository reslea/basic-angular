import { AuthService, LoginModel } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private readonly authService: AuthService,
    private router: Router) {

  }

  onSubmit(): void {
    this.authService.login(this.loginData)
      .subscribe((tokenData) => {
        this.isLoggedIn = true;
        this.username = tokenData.username;
        this.router.navigate(['']);
      });
  }

  logout(): void {
    this.authService.logout();
  }
}

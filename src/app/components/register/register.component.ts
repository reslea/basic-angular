import { RegisterSubmitModel } from './../../services/auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService, RegisterModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: RegisterModel = {
    email: '', 
    username: '',
    password: '',
    passwordConfirm: ''
  };

  constructor(private readonly service: AuthService) { }

  onSubmit() {
    const submitModel = {
      email: this.model.email,
      username: this.model.username,
      password: this.model.password
    };

    this.service.register(submitModel)
      .subscribe();
  }
}

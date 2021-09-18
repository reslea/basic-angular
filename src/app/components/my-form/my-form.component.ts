import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  loginData = {
    login: '',
    password: ''
  };

  onSubmit(): void {
    console.log(this.loginData);
  }
}

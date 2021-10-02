import { EnsureLoginService } from './../../services/ensure-login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ensure-login',
  templateUrl: './ensure-login.component.html',
  styleUrls: ['./ensure-login.component.scss']
})
export class EnsureLoginComponent {
  isSuccess?: boolean;

  constructor(private readonly service: EnsureLoginService) { }
  
  ensure() {
    this.service.ensure()
      .subscribe(
        () => this.isSuccess = true,
        () => this.isSuccess = false);
  }
}

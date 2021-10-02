import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnsureLoginService {  
  apiUrl = "https://localhost:5001/api/AuthTest";

  constructor(private readonly client: HttpClient) { }

  ensure() : Observable<{}> {
    return this.client.get(this.apiUrl);
  }
}

import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Token {
  token: string
}

export interface TokenData {
  userId: number,
  username: string,
  notBefore: Date,
  expires: Date
}

export interface LoginModel {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44397/api/AuthToken";

  token$ = new BehaviorSubject<Token>(null);
  tokenData$ = new BehaviorSubject<TokenData>(null);

  constructor(public client: HttpClient) { }

  login(loginModel: LoginModel): Observable<TokenData> {
    return this.client
    .post<Token>(this.apiUrl, loginModel)
    .pipe(
      tap(t => this.token$.next(t)),
      map(t => {
        const tokenData = this.readTokenData(t);
        this.tokenData$.next(tokenData);
        return tokenData
      }),
    );
  }

  private readTokenData(token: Token): TokenData {
    const dataPart = token.token?.split('.')[1];
    const dataJsonString = atob(dataPart);
    const dataJson = JSON.parse(dataJsonString);

    const idStr = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const userId = idStr ? parseInt(idStr) : null;
    const username = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const notBefore = dataJson["nbf"];
    const expires = dataJson["exp"];

    return {
      userId,
      username,
      notBefore,
      expires
    }
  }
}

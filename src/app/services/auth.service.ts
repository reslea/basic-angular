import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Token {
  token: string
}

export enum Permission {
  AccessExtended,
  OtherPermission
}

export interface TokenData {
  userId: number,
  username: string,
  notBefore: Date,
  expires: Date,
  permissions: Permission[]
}

export interface LoginModel {
  username: string,
  password: string
}

export interface RegisterModel {
  email: string,  
  username: string,
  password: string,
  passwordConfirm: string,
}

export interface RegisterSubmitModel {
  email: string,  
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:5001/api/AuthToken";

  token$ = new BehaviorSubject<string>(null);
  tokenData$ = new BehaviorSubject<TokenData>(null);

  constructor(public client: HttpClient) { }
  
  register(model: RegisterSubmitModel) {
    return this.client
      .post<Token>(`${this.apiUrl}/register`, model)
      .pipe(
        tap(t => this.token$.next(t.token)),
        map(t => {
          const tokenData = this.readTokenData(t);
          this.tokenData$.next(tokenData);
          return tokenData
        }),
      );
  }

  login(loginModel: LoginModel): Observable<TokenData> {
    return this.client
      .post<Token>(`${this.apiUrl}/login`, loginModel)
      .pipe(
        tap(t => this.token$.next(t.token)),
        map(t => {
          const tokenData = this.readTokenData(t);
          this.tokenData$.next(tokenData);
          return tokenData
        }),
      );
  }

  logout() :void {
    this.token$.next(null);
    this.tokenData$.next(null);
  }

  private readTokenData(token: Token): TokenData {
    const dataPart = token.token?.split('.')[1];
    const dataJsonString = atob(dataPart);
    const dataJson = JSON.parse(dataJsonString);

    const idStr = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const userId = idStr;
    const username = dataJson["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const notBefore = dataJson["nbf"];
    const expires = dataJson["exp"];

    const permissionsData = dataJson["permissions"];
    const permissions = typeof permissionsData === 'string'
      ? [Permission[permissionsData]]
      : permissionsData
        .map(p => Permission[p]);

    return {
      userId,
      username,
      notBefore,
      expires,
      permissions
    }
  }
}

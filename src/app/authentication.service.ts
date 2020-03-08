import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }
}

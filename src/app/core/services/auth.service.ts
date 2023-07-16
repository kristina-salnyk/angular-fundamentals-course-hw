import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly TOKEN_KEY = 'token';
  private username = 'Mike';
  private token = 'token';
  private isAuth = true;
  usernameChanged = new EventEmitter<string>();

  login(username: string, password: string): void {
    console.log(`(Login) ${username} ${password}`);

    localStorage.setItem(this.USER_KEY, JSON.stringify({ username }));
    localStorage.setItem(this.TOKEN_KEY, 'token');

    this.token = 'token';
    this.username = username;
    this.isAuth = true;
  }

  logout(): void {
    console.log(`(Logout) ${this.username}`);

    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);

    this.token = '';
    this.username = '';
    this.isAuth = false;

    this.usernameChanged.emit(this.username);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): string {
    return this.username;
  }
}

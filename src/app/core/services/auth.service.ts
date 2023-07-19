import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly USER_LOCAL_STORAGE_KEY = 'user';
  readonly TOKEN_LOCAL_STORAGE_KEY = 'token';
  username = 'Mike';
  token = 'token-example';
  isAuth = false;
  usernameChanged = new EventEmitter<string>();
  isAuthChanged = new EventEmitter<boolean>();

  login(email: string, password: string): void {
    console.log(`Logged in successfully`);
    const username = 'Nick';
    const token = 'token-example';

    localStorage.setItem(
      this.USER_LOCAL_STORAGE_KEY,
      JSON.stringify({ username })
    );
    localStorage.setItem(this.TOKEN_LOCAL_STORAGE_KEY, token);

    this.token = token;
    this.username = username;
    this.isAuth = true;

    this.usernameChanged.emit(this.username);
    this.isAuthChanged.emit(this.isAuth);
  }

  logout(): void {
    console.log(`(Logout) ${this.username}`);

    localStorage.removeItem(this.USER_LOCAL_STORAGE_KEY);
    localStorage.removeItem(this.TOKEN_LOCAL_STORAGE_KEY);

    this.token = '';
    this.username = '';
    this.isAuth = false;

    this.usernameChanged.emit(this.username);
    this.isAuthChanged.emit(this.isAuth);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): string {
    return this.username;
  }
}

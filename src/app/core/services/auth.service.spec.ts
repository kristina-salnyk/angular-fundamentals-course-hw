import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('service', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#login should log in the user', () => {
    const username = 'Nick';
    const token = 'token-example';

    service.login('', '');

    expect(localStorage.getItem(service.USER_LOCAL_STORAGE_KEY)).toBe(
      JSON.stringify({ username })
    );
    expect(localStorage.getItem(service.TOKEN_LOCAL_STORAGE_KEY)).toBe(token);
    expect(service.username).toBe(username);
    expect(service.token).toBe(token);
    expect(service.isAuth).toBe(true);
  });

  it('#logout should log out the user', () => {
    service.logout();

    expect(localStorage.getItem(service.USER_LOCAL_STORAGE_KEY)).toBeNull();
    expect(localStorage.getItem(service.TOKEN_LOCAL_STORAGE_KEY)).toBeNull();
    expect(service.username).toBe('');
    expect(service.token).toBe('');
    expect(service.isAuth).toBe(false);
  });

  it('#isAuthenticated should return the authentication status', () => {
    service.isAuth = true;
    expect(service.isAuthenticated()).toBe(true);

    service.isAuth = false;
    expect(service.isAuthenticated()).toBe(false);
  });

  it('#getUserInfo should return the username', () => {
    service.username = 'Nick';
    expect(service.getUserInfo()).toBe('Nick');

    service.username = 'Mike';
    expect(service.getUserInfo()).toBe('Mike');
  });
});

describe('service class-only', () => {
  let service: AuthService;
  const username = 'Anna';
  const isAuth = true;

  beforeEach(() => {
    service = new AuthService();
    service.username = username;
    service.isAuth = isAuth;
  });

  it("#login should log 'Logged in successfully' message", () => {
    spyOn(console, 'log');
    service.login('example@mail.com', 'example');
    expect(console.log).toHaveBeenCalledWith('Logged in successfully');
  });

  it('#login should raise usernameChanged event', () => {
    spyOn(service.usernameChanged, 'emit');
    service.login('example@mail.com', 'example');
    expect(service.usernameChanged.emit).toHaveBeenCalledWith(service.username);
  });

  it('#login should raise isAuthChanged event', () => {
    spyOn(service.isAuthChanged, 'emit');
    service.login('example@mail.com', 'example');
    expect(service.isAuthChanged.emit).toHaveBeenCalledWith(service.isAuth);
  });

  it("#logout should log '(Logout) [username]' message", () => {
    spyOn(console, 'log');
    service.logout();
    expect(console.log).toHaveBeenCalledWith(`(Logout) ${username}`);
  });

  it('#isAuthenticated should return the authentication status', () => {
    const result = service.isAuthenticated();
    expect(result).toBe(service.isAuth);
  });

  it('#getUserInfo should return the username', () => {
    const result = service.getUserInfo();
    expect(result).toBe(service.username);
  });
});

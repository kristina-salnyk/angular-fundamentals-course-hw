import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username = '';
  isAuthenticated = false;
  @Input() title = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUserInfo();
    this.isAuthenticated = this.authService.isAuthenticated();

    this.authService.usernameChanged.subscribe((username: string) => {
      this.username = username;
    });

    this.authService.isAuthChanged.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}

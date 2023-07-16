import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username = '';
  @Input() title = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUserInfo();

    this.authService.usernameChanged.subscribe((username: string) => {
      this.username = username;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}

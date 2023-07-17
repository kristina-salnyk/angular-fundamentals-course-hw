import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Video Courses';
  isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();

    this.authService.isAuthChanged.subscribe((isAuthenticated: boolean) => {
      this.isAuth = isAuthenticated;
    });
  }
}

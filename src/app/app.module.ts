import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './pages/courses/courses.module';
import { LoginModule } from './pages/login/login.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoursesModule,
    LoginModule,
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

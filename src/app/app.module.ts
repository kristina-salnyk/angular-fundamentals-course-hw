import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SearchComponent } from './pages/courses/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/header/logo/logo.component';
import { LocationComponent } from './shared/location/location.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseItemComponent } from './pages/courses/course-list/course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    SearchComponent,
    FooterComponent,
    LogoComponent,
    LocationComponent,
    ButtonComponent,
    InputComponent,
    CourseListComponent,
    CourseItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/modules/header/header.component';
import {CoursesComponent} from './pages/modules/courses/courses.component';
import {SearchComponent} from './pages/modules/courses/search/search.component';
import {FooterComponent} from './shared/modules/footer/footer.component';
import {LogoComponent} from './shared/modules/header/logo/logo.component';
import {LocationComponent} from './shared/modules/location/location.component';
import {ButtonComponent} from './shared/components/button/button.component';
import {InputComponent} from './shared/components/input/input.component';
import {CourseListComponent} from './pages/modules/courses/course-list/course-list.component';
import {CourseItemComponent} from './pages/modules/courses/course-list/course-item/course-item.component';

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
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

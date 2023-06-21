import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LocationComponent } from './components/location/location.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CourseItemBorderDirective } from './directives/course-item-border.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LocationComponent,
    ButtonComponent,
    InputComponent,
    CourseItemBorderDirective,
  ],
  exports: [
    HeaderComponent,
    LocationComponent,
    LocationComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    CourseItemBorderDirective,
  ],
  imports: [MatIconModule, NgIf, FormsModule],
})
export class SharedModule {}

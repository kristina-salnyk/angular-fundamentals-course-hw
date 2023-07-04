import { NgModule } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LocationComponent } from './components/location/location.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CourseItemBorderDirective } from './directives/course-item-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LocationComponent,
    ButtonComponent,
    InputComponent,
    CourseItemBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
  exports: [
    HeaderComponent,
    LocationComponent,
    LocationComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    CourseItemBorderDirective,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [MatIconModule, NgIf, FormsModule, UpperCasePipe],
})
export class SharedModule {}

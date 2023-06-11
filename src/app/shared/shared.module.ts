import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LocationComponent } from './components/location/location.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LocationComponent,
    ButtonComponent,
    InputComponent,
  ],
  exports: [
    HeaderComponent,
    LocationComponent,
    LocationComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [MatIconModule, NgIf],
})
export class SharedModule {}

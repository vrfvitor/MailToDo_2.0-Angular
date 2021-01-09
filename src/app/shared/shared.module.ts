import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'app/ng-material.module';

import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule { }

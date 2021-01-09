import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../ng-material.module';

import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
        AngularMaterialModule
    ],
    exports: [],
    declarations: [
        SigninComponent,
        RegisterComponent,
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }

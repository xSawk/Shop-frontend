import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/modules/register/register.component';



@NgModule({
  declarations: [
    PageComponent,
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }

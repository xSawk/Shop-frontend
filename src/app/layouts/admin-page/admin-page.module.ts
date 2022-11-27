import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminPageComponent } from './admin-page.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminProductComponent } from 'src/app/modules/admin/admin-product/admin-product.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AdminPageModule { }

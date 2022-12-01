import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomePageComponent } from 'src/app/modules/home-page/home-page.component';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from 'src/app/modules/product-details/product-details.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomePageComponent,
    ProductComponent,
    ProductDetailsComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }

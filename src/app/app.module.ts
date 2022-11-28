import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ProductComponent } from './modules/product/product.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageModule } from './layouts/page/page.module';
import { AdminPageModule } from './layouts/admin-page/admin-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductUpdateComponent } from './modules/admin/admin-product-update/admin-product-update.component';




@NgModule({
  declarations: [
    AppComponent,
    
    

    
   
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    PageModule,
    AdminPageModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

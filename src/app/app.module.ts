import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { PageModule } from './layouts/page/page.module';
import { AdminPageModule } from './layouts/admin-page/admin-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminReviewComponent } from './modules/admin/admin-review/admin-review.component';


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

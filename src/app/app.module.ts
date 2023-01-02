import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { PageModule } from './layouts/page/page.module';
import { AdminPageModule } from './layouts/admin-page/admin-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AdminPageEmptyModule } from './layouts/admin-page-empty/admin-page-empty.module';
import { TokenInterceptor } from './modules/common/interceptor/tokenInterceptor';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';



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
    AdminPageEmptyModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AdminAuthorizeGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

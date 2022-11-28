import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PageComponent } from './layouts/page/page.component';
import { AdminProductAddComponent } from './modules/admin/admin-product-add/admin-product-add.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product-update/admin-product-update.component';
import { AdminProductComponent } from './modules/admin/admin-product/admin-product.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { LoginComponent } from './modules/login/login.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
{
  path:'', component: DefaultComponent, children: [
    
    { path:'', component: HomePageComponent},
    { path:'products', component: ProductComponent},
  ]
},
{
  path:'', component: PageComponent, children: [
    
    { path:'login', component: LoginComponent},
    
  ]
},
{
  path:'', component: AdminPageComponent, children: [
    
    { path:'admin', component: AdminComponent},
    { path:'admin/products', component: AdminProductComponent},
    { path:'admin/products/update/:id', component: AdminProductUpdateComponent},
    { path:'admin/products/add', component: AdminProductAddComponent}
    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

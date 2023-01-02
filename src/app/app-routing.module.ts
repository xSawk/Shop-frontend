import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageEmptyComponent } from './layouts/admin-page-empty/admin-page-empty.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PageComponent } from './layouts/page/page.component';
import { AdminCategoryAddComponent } from './modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from './modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryComponent } from './modules/admin/admin-category/admin-category.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminOrderUpdateComponent } from './modules/admin/admin-order/admin-order-update/admin-order-update.component';
import { AdminOrderComponent } from './modules/admin/admin-order/admin-order.component';
import { AdminProductAddComponent } from './modules/admin/admin-product/admin-product-add/admin-product-add.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product/admin-product-update/admin-product-update.component';
import { AdminProductComponent } from './modules/admin/admin-product/admin-product.component';
import { AdminReviewComponent } from './modules/admin/admin-review/admin-review.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CartComponent } from './modules/cart/cart.component';
import { CategoryComponent } from './modules/category/category.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { LoginComponent } from './modules/login/login.component';
import { OrderComponent } from './modules/order/order.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { ProductComponent } from './modules/product/product.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [
{
  path:'', component: DefaultComponent, children: [
    
    { path:'', component: HomePageComponent},
    { path:'products', component: ProductComponent},
    { path:'products/:id', component: ProductDetailsComponent},
    { path:'categories/:id', component: CategoryComponent},
    { path:'cart', component: CartComponent},
    { path:'order', component: OrderComponent},
    { path:'profile', component: ProfileComponent}
  ]
},
{
  path:'', component: PageComponent, children: [
    
    { path:'login', component: LoginComponent},
    { path:'register', component: RegisterComponent},
    
  ]
},
{
  path:'', component: AdminPageComponent, children: [
    
    { path:'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/products', component: AdminProductComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/products/update/:id', component: AdminProductUpdateComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/products/add', component: AdminProductAddComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/categories', component: AdminCategoryComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/categories/add', component: AdminCategoryAddComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/categories/update/:id', component: AdminCategoryUpdateComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/reviews', component: AdminReviewComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/orders', component: AdminOrderComponent, canActivate: [AdminAuthorizeGuard]},
    { path:'admin/orders/update/:id', component: AdminOrderUpdateComponent, canActivate: [AdminAuthorizeGuard]}
   
    
  ]
},
{
  path:'', component: AdminPageEmptyComponent, children: [
    
    { path:'admin/login', component: AdminLoginComponent}

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

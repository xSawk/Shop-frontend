import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PageComponent } from './layouts/page/page.component';
import { AdminCategoryAddComponent } from './modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from './modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryComponent } from './modules/admin/admin-category/admin-category.component';
import { AdminOrderUpdateComponent } from './modules/admin/admin-order/admin-order-update/admin-order-update.component';
import { AdminOrderComponent } from './modules/admin/admin-order/admin-order.component';
import { AdminProductAddComponent } from './modules/admin/admin-product/admin-product-add/admin-product-add.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product/admin-product-update/admin-product-update.component';
import { AdminProductComponent } from './modules/admin/admin-product/admin-product.component';
import { AdminReviewComponent } from './modules/admin/admin-review/admin-review.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CartComponent } from './modules/cart/cart.component';
import { CategoryComponent } from './modules/category/category.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { LoginComponent } from './modules/login/login.component';
import { OrderComponent } from './modules/order/order.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { ProductComponent } from './modules/product/product.component';


const routes: Routes = [
{
  path:'', component: DefaultComponent, children: [
    
    { path:'', component: HomePageComponent},
    { path:'products', component: ProductComponent},
    { path:'products/:id', component: ProductDetailsComponent},
    { path:'categories/:id', component: CategoryComponent},
    { path:'cart', component: CartComponent},
    { path:'order', component: OrderComponent}
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
    { path:'admin/products/add', component: AdminProductAddComponent},
    { path:'admin/categories', component: AdminCategoryComponent},
    { path:'admin/categories/add', component: AdminCategoryAddComponent},
    { path:'admin/categories/update/:id', component: AdminCategoryUpdateComponent},
    { path: 'admin/reviews', component: AdminReviewComponent},
    { path: 'admin/orders', component: AdminOrderComponent},
    { path:'admin/orders/update/:id', component: AdminOrderUpdateComponent}

    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

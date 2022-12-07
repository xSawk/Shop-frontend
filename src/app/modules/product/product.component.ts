import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../common/model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService : ProductService){}

  ngOnInit(): void{
    this.getProduct();
  }

  products: Product[] = [];
  totalElements: number = 0;

  getProduct(){
    this.getProductsPage(0,10);
  }

  onPageEvent(event: PageEvent){
      this.getProductsPage(event.pageIndex,event.pageSize)
  }

  private getProductsPage(page: number, size:number){
    this.productService.getProducts(page,size)
    .subscribe(products => {
      this.products = products.content;
      this.totalElements = products.totalElements;
    });
  }



}

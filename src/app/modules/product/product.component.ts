import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService : ProductService){}

  ngOnInit(): void{
    this.getProducts();
  }

  products: Product[] = [];

  getProducts(){
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

}

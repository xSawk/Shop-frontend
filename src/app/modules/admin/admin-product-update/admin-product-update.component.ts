import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../admin-product/admin-product.service';
import { AdminProductUpdateService } from './admin-product-update.service';
import { AdminProductUpdate } from './model/adminProductUpdate';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {

  product!: AdminProductUpdate;
  productForm!: FormGroup;

  constructor(private router: ActivatedRoute, private adminProductUpdateService: AdminProductUpdateService, 
    private formBulider: FormBuilder){

  }
  ngOnInit(): void {
    this.getProduct();

    this.productForm = this.formBulider.group({
        name: [''],
        description: [''],
        category: [''],
        price: [''],
        currency: ['PLN']
    });
  }

  getProduct(){
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.getProduct(id).subscribe(
      product => this.productForm.setValue({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        currency: product.currency

      }));
  }

  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.saveProduct(id, this.productForm.value).subscribe(
      // put return it again to refresh form
      product => this.productForm.setValue({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        currency: product.currency

      }));
  }
    

}

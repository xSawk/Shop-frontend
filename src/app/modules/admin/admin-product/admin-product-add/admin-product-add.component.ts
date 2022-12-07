import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductUpdateService } from '../admin-product-update/admin-product-update.service';

import { AdminProductAddService } from './admin-product-add.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {

  
  productForm!: FormGroup;

  constructor(private router: Router, private adminProductAddService:AdminProductAddService, 
    private formBulider: FormBuilder){

  }

  ngOnInit(): void {
    this.productForm = this.formBulider.group({
        name: [''],
        description: [''],
        category: [''],
        price: [''],
        currency: ['PLN']
    });
  }



  submit() {
      this.adminProductAddService.addProduct(this.productForm.value)
      .subscribe(product => this.router.navigate(["/admin/products"]))
   
  }
    

}

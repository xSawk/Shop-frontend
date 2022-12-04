import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../admin-product/admin-product.service';
import { AdminCategoryNamesDto } from '../common/dto/adminCategoryNamesDto';
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
  imageForm!: FormGroup;
  requiredFileTypes = "image/jpeg, image/png";
  image: string | null = null;
  categories: Array<AdminCategoryNamesDto> = [];

  constructor(private router: ActivatedRoute, 
    private adminProductUpdateService: AdminProductUpdateService, 
    private formBulider: FormBuilder){

  }
  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
    

    this.productForm = this.formBulider.group({
        name: [''],
        description: [''],
        categoryId: [''],
        price: [''],
        currency: ['PLN'],

    });

    this.imageForm = this.formBulider.group({
      file: ['']
    })
  }

  getProduct() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.getProduct(id)
      .subscribe(product => this.mapFormValues(product));
  }

  getCategories(){
     this.adminProductUpdateService.getCategories()
     .subscribe(categories => this.categories = categories)
  }
      
  
  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.saveProduct(id, {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      categoryId: this.productForm.get('categoryId')?.value,
      price: this.productForm.get('price')?.value,
      currency: this.productForm.get('currency')?.value,
      image: this.image
    } as AdminProductUpdate).subscribe({
      next: result => {
        this.mapFormValues(result);
       
      },
      error: err => console.log(err)
    });
  }


 

  onFileChange(event: any){
    if(event.target.files.length > 0){
      this.imageForm.patchValue({
        file: event.target.files[0]
      });
    }
  }

  uploadFile(){
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.adminProductUpdateService.uploadImage(formData)
      .subscribe(result => this.image = result.filename);
      console.log(this.image);
  }
  


private mapFormValues(product: AdminProductUpdate): void {
  this.productForm.setValue({
    name: product.name,
    description: product.description,
    categoryId: product.categoryId,
    price: product.price,
    currency: product.currency,
    
  });
  this.image = product.image;
}









}
    



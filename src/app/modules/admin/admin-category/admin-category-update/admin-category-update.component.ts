import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminCategoryService } from '../admin-category.service';

@Component({
  selector: 'app-admin-category-update',
  templateUrl: './admin-category-update.component.html',
  styleUrls: ['./admin-category-update.component.scss']
})
export class AdminCategoryUpdateComponent implements OnInit{


  categoryForm!: FormGroup;

  constructor(private adminCategoryService: AdminCategoryService,
     private formBuilder: FormBuilder,
     private router: ActivatedRoute) {
    
  }
  ngOnInit(): void {

    this.categoryForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: [""]
  });
    this.getCategory();
    
  }


  getCategory(){
      this.adminCategoryService.getCategory(Number(this.router.snapshot.params['id']))
      .subscribe(category => this.categoryForm.setValue({
        name: category.name,
        description: category.description



      }));
  }

  submit(){
      this.adminCategoryService.saveCategory(Number(this.router.snapshot.params['id']),this.categoryForm.value)
      .subscribe({
        next: category => this.categoryForm.setValue({
          name: category.name,
          description: category.description
          
          
      }),
            
        
        error: err => {}

    });


}



}
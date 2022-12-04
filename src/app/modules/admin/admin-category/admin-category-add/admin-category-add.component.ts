import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminCategoryService } from '../admin-category.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent implements OnInit{


  categoryForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
              private  adminCategoryService: AdminCategoryService,
              private router: Router
    ){}



  ngOnInit(): void {

    this.categoryForm = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        description: [""]
    });
    
  }


  submit(){
      this.adminCategoryService.addCategory(this.categoryForm.value)
      .subscribe({
          next: category => {
            this.router.navigate(["/admin/categories"])
          },
          error: err => {}

      })


  }



}

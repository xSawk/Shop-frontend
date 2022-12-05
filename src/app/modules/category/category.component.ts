import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { Category } from './model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  


  category?: Category;
  private sub!: Subscription;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router){}
 
  
  
  ngOnInit(): void {

   
    this.getCategoriesWithProduct();

    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)

     ).subscribe(()=> this.getCategoriesWithProduct());


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



  getCategoriesWithProduct(){
      let id = this.route.snapshot.params['id'];
      this.categoryService.getCategoriesWithProduct(id)
      .subscribe(category => this.category = category);
  }

}

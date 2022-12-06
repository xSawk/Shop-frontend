import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { Category } from './model/category';
import { CategoryProducts } from './model/categoryProducts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  


  categoryProducts?: CategoryProducts;
  private sub!: Subscription;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router){}
 
  
  
  ngOnInit(): void {

   
    this.getCategoriesWithProduct(0,15);

    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)

     ).subscribe(()=> this.getCategoriesWithProduct(0,15));


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



  getCategoriesWithProduct(page: number, size: number){
      let id = this.route.snapshot.params['id'];
      this.categoryService.getCategoriesWithProduct(id, page, size)
      .subscribe(categoryProducts => this.categoryProducts = categoryProducts);
  }

  onPageEvent(event: PageEvent){
    this.getCategoriesWithProduct(event.pageIndex,event.pageSize)
}

}

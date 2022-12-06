import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProducts } from './model/categoryProducts';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }





  getCategoriesWithProduct(id: number,page: number, size:number): Observable<CategoryProducts> {
      return this.http.get<CategoryProducts>(`/api/categories/${id}/products?page=${page}&size=${size}`)
      

  }



}

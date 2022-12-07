import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCategoryNamesDto } from '../../common/dto/adminCategoryNamesDto';

import { AdminProductUpdate } from '../model/adminProductUpdate';
import { UploadResponse } from '../model/uploadResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {



  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<AdminProductUpdate>{
    return this.http.get<AdminProductUpdate>("/api/admin/product/"+id);
  }

  getCategories(): Observable<Array<AdminCategoryNamesDto>>{
    return this.http.get<Array<AdminCategoryNamesDto>>("/api/admin/categories");
  }

  saveProduct(id: number, value: AdminProductUpdate) {
      return this.http.put<AdminProductUpdate>('/api/admin/product/'+id,value);
  }

    
}

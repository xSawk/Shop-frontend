import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../admin-confirm-dialog.service';
import { AdminCategoryNamesDto } from '../common/dto/adminCategoryNamesDto';
import { AdminCategoryService } from './admin-category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  constructor(private adminCategoryService: AdminCategoryService, private adminConfirmDialogService: AdminConfirmDialogService) {
    
  }
  ngOnInit(): void {
      this.getCategories();
  }
  
  dataSource: Array<AdminCategoryNamesDto> = [];
  displayedColumns: string[] = ["id","name","actions"];
  @ViewChild(MatTable) table!: MatTable<any>;


  getCategories(){
     this.adminCategoryService.getCategories()
     .subscribe(categories => this.dataSource = categories)
  }

  confirmDelete(element: AdminCategoryNamesDto) {
    this.adminConfirmDialogService.openDialog()
    .afterClosed()
    .subscribe(result => {
    if(result){
      this.adminCategoryService.delete(element.id)
      .subscribe(() => {
        this.dataSource.forEach((value,index) => {
          if(element == value) {
            this.dataSource.splice(index, 1);
            this.table.renderRows();
          }

        })
      });
    }

    });
}}


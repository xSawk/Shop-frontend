import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { startWith, switchMap } from 'rxjs';
import { AdminConfirmDialogService } from '../admin-confirm-dialog.service';
import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './adminProduct';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit {


  dataSource: AdminProduct[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["id","name","price","actions"];
  totalElements: number = 0;

  constructor(private adminProductService: AdminProductService,
    private adminConfirmDialogService: AdminConfirmDialogService
    
    ){

  }
  
  // https://material.angular.io/components/table/examples#table-http
  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.dataSource = data.content;
    });


  }

  confirmDelete(element: AdminProduct){
      this.adminConfirmDialogService.openDialog()
      .afterClosed()
      .subscribe(result => {
      if(result){
        this.adminProductService.delete(element.id)
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
  }


    
}

import {Component} from '@angular/core';

import {ListProductDataSource} from './list.datasource';

import {ProductService} from '../product.service';
import {Product} from '../product';
import {CreateProductComponent} from '../create/create.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductComponent {

  public displayedColumns = ['name', 'imgUrl', 'description', 'price', 'actions'];
  public dataSource: ListProductDataSource = null;

  constructor(private productService: ProductService, public dialog: MatDialog) {
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getAll().subscribe(
      products => {
      this.dataSource = new ListProductDataSource(products);
      }
    );
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateProductComponent, {
      width: '500px',
      data: { product: new Product(), canceled: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.productService.createProduct(result);
        setTimeout(callback => {
          this.getProductsList();
        }, 1000);
      }
    });
  }

  public hasData() {
    return this.dataSource !== null;
  }

  onDelete(element: Product) {
    this.productService.delete(element);
    setTimeout(callback => {
      this.getProductsList();
    }, 1000);
  }

  onUpdate(element: Product) {
    this.productService.update(element);
  }
}

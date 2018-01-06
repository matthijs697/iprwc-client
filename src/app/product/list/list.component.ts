import {Component} from '@angular/core';

import {ListProductDataSource} from './list.datasource';

import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductComponent {

  public displayedColumns = ['name', 'imgUrl', 'description', 'price', 'actions'];
  public dataSource: ListProductDataSource = null;

  constructor(private productService: ProductService) {
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getAll().subscribe(
      products => {
      this.dataSource = new ListProductDataSource(products);
      console.log('Refresh');
      }
    );
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
}

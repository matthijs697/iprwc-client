import {Component} from '@angular/core';

import {ProductService} from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductComponent {

  public products = null;

  constructor(private productService: ProductService) {
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      }
    );
  }

}

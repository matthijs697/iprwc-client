import {Component} from '@angular/core';

import {ProductService} from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewProductComponent {

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

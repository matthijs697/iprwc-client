import {Component} from '@angular/core';

import {ProductService} from '../product.service';
import {Product} from '../product';
import {AuthorizationService} from '../../shared/authorization.service';
import {User} from '../../user/user';
import {CartItem} from '../../cart/cart-item';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'product-list',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewProductComponent {

  products = null;
  authenticator: User = null;

  constructor(private productService: ProductService, private authService: AuthorizationService, private snackbar: MatSnackBar) {
    this.authenticator = authService.getAuthenticator();
    authService.authenticator$.subscribe(
      auth => {
        this.authenticator = auth;
      }
    );
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      }
    );
  }

  addToCart(product: Product) {
    let added = false;
    this.authenticator.cart.forEach(
      p => {
        if (p.product.id === product.id) {
          p.amount += 1;
          added = true;
          return;
        }
      }
    );
    if (!added) {
      this.authenticator.cart.push(new CartItem(product, 1));
    }
    this.authService.storeAuthorization(this.authenticator, false);
    this.snackbar.open('Product toegevoegd aan winkelwagen!', 'Sluiten', {
      duration: 2000
    });
  }
}

import {Component} from '@angular/core';

import {AuthorizationService} from '../shared/authorization.service';

import {CartDataSource} from './cart.datasource';
import {User} from '../user/user';
import {CartItem} from './cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {


  public displayedColumns = ['name', 'description', 'price', 'amount', 'actions'];
  authenticated: boolean;
  authenticator: User = null;
  totalPrice: number = 0;
  public dataSource: CartDataSource = null;

  constructor(private authService: AuthorizationService) {
    this.authenticated = authService.hasAuthorization();
    authService.authorized$.subscribe(
      authorized => {
        this.authenticated = authorized;
      }
    );
    this.getCartList();
    this.authenticator.cart.forEach(entry => {
      this.totalPrice += entry.amount * entry.product.price;
    });
  }

  private getCartList() {
    this.authenticator = this.authService.getAuthenticator();
    this.authService.authenticator$.subscribe(
      auth => {
        this.authenticator = auth;
      }
    );
    this.dataSource = new CartDataSource(this.authenticator.cart);
  }

  public hasData() {
    return this.dataSource !== null;
  }

  onUpdate() {
    this.authService.storeAuthorization(this.authenticator, false);
    this.totalPrice = 0;
    this.authenticator.cart.forEach(entry => {
      this.totalPrice += entry.amount * entry.product.price;
    });
  }

  onDelete(cartItem: CartItem) {
    const index: number = this.authenticator.cart.indexOf(cartItem);
    if (index !== -1) {
      this.authenticator.cart.splice(index, 1);
    }
    this.getCartList();

  }

  onOrder() {
    this.authenticator.cart = [];
    this.authService.storeAuthorization(this.authenticator, false);
    this.totalPrice = 0;
    this.getCartList();
  }

}

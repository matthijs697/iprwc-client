import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {CartItem} from './cart-item';

export class CartDataSource extends DataSource<any> {

  constructor(private cartItems: CartItem[]) {
    super();
  }

  public connect(): Observable<CartItem[]> {
    return Observable.of(this.cartItems);
  }

  public disconnect() { }

}

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Product} from '../product';

export class ListProductDataSource extends DataSource<any> {

  constructor(private product: Product[]) {
    super();
  }

  public connect(): Observable<Product[]> {
    return Observable.of(this.product);
  }

  public disconnect() { }

}

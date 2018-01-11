import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';

import {Product} from './product';

@Injectable()
export class ProductService {

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) { }

  public getAll(): Observable<Product[]> {
    return this.api.get<Product[]>('products');
  }

  public createProduct(product: Product, callback: () => void): void {
    if (this.authService.hasAuthorization()) {
      this.api.post<void>('products', product).subscribe(
        data => {
          this.goProducts();
          callback();
        }, error => {
          alert('Maken van nieuw product mislukt');
        }
      );
    }
  }

  public update(product: Product) {
    this.api.put<Product>('products/' + product.id, product).subscribe();
  }

  public delete(produtct: Product, callback: () => void) {
    this.api.delete('products/' + produtct.id).subscribe();
  }

  private goHome() {
    this.router.navigate(['']);
  }

  public goProducts() {
    this.router.navigate(['products']);
  }

}

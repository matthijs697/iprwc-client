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

  public createProduct(product: Product): void {
    if (this.authService.hasAuthorization()) {
      let data = {
        name: product.name,
        description: product.description,
        imgUrl: product.imgUrl,
        price: product.price
      };

      this.api.post<void>('products', data).subscribe(
        data => {
          this.goHome();
        }, error => {
          alert('Maken van nieuw product mislukt');
        }
      );
    }
  }

  public logout() {
    this.authService.deleteAuthorization();
    this.goHome();
  }

  private goHome() {
    this.router.navigate(['']);
  }
}

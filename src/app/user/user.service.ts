import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';

import {User} from './user';

@Injectable()
export class UserService {
  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) { }

  public getAll(): Observable<User[]> {
    return this.api.get<User[]>('users');
  }

  public register(user: User): void {
    let data = {
      email: user.email,
      password: user.password,
      role: 'GUEST',
      firstname: user.firstname,
      suffix: user.suffix,
      lastname: user.lastname,
      zipcode: user.zipcode,
      street: user.street,
      active: true
    };
    this.api.post<void>('users', data).subscribe(
        data => {
            this.goHome();
        }, error => {
            alert('Het registreren is mislukt');
        }
    );
  }

  public login(user: User, remember: boolean): void {
    this.authService.setAuthorization(user.email, user.password);
    this.api.get<User>('users/me').subscribe(
        authenticator => {
          authenticator.cart = [];
          this.authService.storeAuthorization(authenticator, remember);
          this.goHome();
        },error => {
            alert('Het inloggen is mislukt');
        }
    );
  }

  public update(user: User) {
    this.api.put<User>('users/' + user.id, user).subscribe(
      res => {
      }, err => {
        console.log(err.message);
      }
    );
  }

  public logout() {
    this.authService.deleteAuthorization();
    this.goHome();
  }

  private goHome() {
    this.router.navigate(['']);
  }

  public delete(user: User, callback: () => void) {
    this.api.delete<void>('users/' + user.id).subscribe(
      res => {
        callback();
      }, err => {
        console.log(err.message);
      }
    );
  }
}

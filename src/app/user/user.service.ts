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
    user.role = 'GUEST';
    // let data = {
    //   firstname: user.firstname,
    //   suffix: user.suffx,
    //   lastname: user.lastname,
    //   zipcpde: user.zipcode,
    //   street: user.street,
    //   email: user.email,
    //   password: user.password,
    //   role: 'GUEST'
    // };

    this.api.post<void>('users', user).subscribe(
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
        console.log('[DEBUG] Updated user: ' + res.email);
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

  public delete(user: User) {
    this.api.delete<void>('users/' + user.id).subscribe(
      res => {
        console.log('[DEBUG] Deleted user: ' + user.email);
      }, err => {
        console.log(err.message);
      }
    );
  }
}

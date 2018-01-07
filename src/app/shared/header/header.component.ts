import {Component} from '@angular/core';

import {Router} from '@angular/router';

import {AuthorizationService} from '../authorization.service';
import {User} from '../../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public authenticated: boolean = false;
  public authenticator: User = null;

  constructor(private authService: AuthorizationService, private router: Router) {
    this.authenticated = authService.hasAuthorization();
    authService.authorized$.subscribe(
        authorized => {
            this.authenticated = authorized;
        }
    );
    this.authService.authenticator$.subscribe(
      authenticator => {
        this.authenticator = authenticator;
      }
    );
    // this.authenticator = authService.getAuthenticator();
    // console.log(this.authenticator.role);
  }

  public goHome() {
    this.router.navigate(['']);
  }

  public goUsers() {
    this.router.navigate(['users']);
  }

  public logout() {
    this.authService.deleteAuthorization();
    this.goHome();
  }

  public goProducts() {
    this.router.navigate(['products/overview']);
  }

  public goLogin() {
    this.router.navigate(['login']);
  }
}

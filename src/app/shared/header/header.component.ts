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
    this.authenticator = authService.getAuthenticator();
    authService.authenticator$.subscribe(
      authenticator => {
        this.authenticator = authenticator;
      }
    );
  }

  goHome() {
    this.router.navigate(['']);
  }

  goUsers() {
    this.router.navigate(['users']);
  }

  logout() {
    this.authService.deleteAuthorization();
    this.goHome();
  }

  goProducts() {
    this.router.navigate(['products']);
  }

  goLogin() {
    this.router.navigate(['login']);
  }

  goCart() {
    this.router.navigate(['cart']);
  }
}

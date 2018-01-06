import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthorizationService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.hasRole('ADMIN')) {
      alert('Not authorized');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}

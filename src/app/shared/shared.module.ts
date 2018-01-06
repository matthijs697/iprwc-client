import {NgModule} from '@angular/core';

import {PublicModule} from '../public.module';

import {AuthorizationService} from './authorization.service';
import {ApiService} from './api.service';

import {HeaderComponent} from './header/header.component';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  imports: [ PublicModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: [ ApiService, AuthorizationService, AuthGuardService ]
})
export class SharedModule { }

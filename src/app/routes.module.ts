import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {ListUserComponent} from './user/list/list.component';
import {ListProductComponent} from './product/list/list.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {OverviewProductComponent} from './product/overview/overview.component';
import {CartComponent} from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: OverviewProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ListUserComponent, canActivate: [AuthGuardService] },
  { path: 'products', component: ListProductComponent, canActivate: [AuthGuardService] },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }

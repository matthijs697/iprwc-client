import {NgModule} from '@angular/core';

import {PublicModule} from '../public.module';

import {CartComponent} from './cart.component';

@NgModule({
  imports: [ PublicModule ],
  declarations: [ CartComponent ]
})
export class CartModule { }

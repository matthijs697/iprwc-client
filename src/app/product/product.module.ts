import {NgModule} from '@angular/core';

import {PublicModule} from '../public.module';
import {SharedModule} from '../shared/shared.module';

import {ProductService} from './product.service';
import {ListProductComponent} from './list/list.component';

@NgModule({
  imports: [ PublicModule, SharedModule ],
  exports: [  ],
  declarations: [ ListProductComponent ],
  providers: [ ProductService ]
})
export class ProductModule { }

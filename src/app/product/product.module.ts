import {NgModule} from '@angular/core';

import {PublicModule} from '../public.module';
import {SharedModule} from '../shared/shared.module';

import {ProductService} from './product.service';
import {ListProductComponent} from './list/list.component';
import {OverviewProductComponent} from './overview/overview.component';
import {CreateProductComponent} from './create/create.component';

@NgModule({
  imports: [ PublicModule, SharedModule ],
  exports: [  ],
  declarations: [ CreateProductComponent, OverviewProductComponent, ListProductComponent, ],
  providers: [ ProductService ],
  entryComponents: [ CreateProductComponent ]
})
export class ProductModule { }

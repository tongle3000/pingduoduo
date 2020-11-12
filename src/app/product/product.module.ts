import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  ProductContainerComponent,
  GroupShortListComponent,
  GroupItemComponent,
  ProductFooterComponent,
  ProductVariantDialogComponent,
  ProductAmountComponent,
  ConfirmOrderComponent
} from './components';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductFooterComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOrderComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent], // 这里不申明会报错,我的不加这句不报错.暂时不加.
  // entryComponents 是添加动态组件的地方.弹出什么的组件,应该都放这.
})
export class ProductModule { }

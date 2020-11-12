import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgoPipe } from './pipe/ago.pipe';
import { DialogModule } from '../dialog/dialog.module';


import {
  GridItemDirective,
  GridItemIconDirective,
  GridItemTitleDirective,
  TagDirective,
  AvatarDirective,
  ButtonDirective,
  RemoveDialogDirective
} from './directives';

import {
  ScrollableTabComponent,
  ImagesSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  VerticalGridComponent,
  ProductCardComponent,
  ProductTileComponent,
  FooterComponent,
  BackButtonComponent
} from './components';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImagesSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    FooterComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemIconDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    ButtonDirective,
    RemoveDialogDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule // 提供双向绑定 [(ngModule)]指令.  这个 NgModule 向外 Exports: NgModule NgForm NgFormSelect NgModuleGroup...
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImagesSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    FooterComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemIconDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    ButtonDirective,
    RemoveDialogDirective,
    AgoPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent, ChildComponent } from './components';
import { token } from './services';
// HttpClientModule


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [{ provide: token, useValue: 'http://localhost' }],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { TestTempComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TestTempComponent],
  imports: [
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule { }

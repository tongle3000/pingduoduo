/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestTempComponent } from './test-temp.component';

describe('TestTempComponent', () => {
  let component: TestTempComponent;
  let fixture: ComponentFixture<TestTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

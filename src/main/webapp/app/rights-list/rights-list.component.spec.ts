/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightsListComponent } from './rights-list.component';

describe('RightsListComponent', () => {
  let component: RightsListComponent;
  let fixture: ComponentFixture<RightsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

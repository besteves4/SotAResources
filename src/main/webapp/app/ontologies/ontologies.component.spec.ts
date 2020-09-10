/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OntologiesComponent } from './ontologies.component';

describe('OntologiesComponent', () => {
  let component: OntologiesComponent;
  let fixture: ComponentFixture<OntologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

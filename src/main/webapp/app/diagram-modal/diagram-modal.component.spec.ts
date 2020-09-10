/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiagramModalComponent } from './diagram-modal.component';

describe('DiagramModalComponent', () => {
  let component: DiagramModalComponent;
  let fixture: ComponentFixture<DiagramModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

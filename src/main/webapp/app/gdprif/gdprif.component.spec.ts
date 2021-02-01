/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDPRifComponent } from './gdprif.component';

describe('GDPRifComponent', () => {
  let component: GDPRifComponent;
  let fixture: ComponentFixture<GDPRifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDPRifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDPRifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

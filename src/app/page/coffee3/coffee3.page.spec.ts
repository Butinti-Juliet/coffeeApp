import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffee3Page } from './coffee3.page';

describe('Coffee3Page', () => {
  let component: Coffee3Page;
  let fixture: ComponentFixture<Coffee3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coffee3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coffee3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

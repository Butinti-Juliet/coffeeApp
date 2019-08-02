import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffee2Page } from './coffee2.page';

describe('Coffee2Page', () => {
  let component: Coffee2Page;
  let fixture: ComponentFixture<Coffee2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coffee2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coffee2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffee1Page } from './coffee1.page';

describe('Coffee1Page', () => {
  let component: Coffee1Page;
  let fixture: ComponentFixture<Coffee1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coffee1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coffee1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

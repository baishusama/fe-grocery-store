import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHomeSub1Component } from './lazy-home-sub1.component';

describe('LazyHomeSub1Component', () => {
  let component: LazyHomeSub1Component;
  let fixture: ComponentFixture<LazyHomeSub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyHomeSub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyHomeSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

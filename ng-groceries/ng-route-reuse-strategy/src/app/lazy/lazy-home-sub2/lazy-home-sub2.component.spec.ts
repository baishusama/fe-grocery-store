import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHomeSub2Component } from './lazy-home-sub2.component';

describe('LazyHomeSub2Component', () => {
  let component: LazyHomeSub2Component;
  let fixture: ComponentFixture<LazyHomeSub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyHomeSub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyHomeSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMiddlewareChainComponent } from './custom-middleware-chain.component';

describe('CustomMiddlewareChainComponent', () => {
  let component: CustomMiddlewareChainComponent;
  let fixture: ComponentFixture<CustomMiddlewareChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMiddlewareChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMiddlewareChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

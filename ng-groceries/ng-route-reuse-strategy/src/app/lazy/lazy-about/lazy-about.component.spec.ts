import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAboutComponent } from './lazy-about.component';

describe('LazyAboutComponent', () => {
  let component: LazyAboutComponent;
  let fixture: ComponentFixture<LazyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentWaysPageComponent } from './different-ways-page.component';

describe('DifferentWaysPageComponent', () => {
  let component: DifferentWaysPageComponent;
  let fixture: ComponentFixture<DifferentWaysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DifferentWaysPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentWaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

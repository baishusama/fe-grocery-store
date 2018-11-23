import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilPageComponent } from './take-until-page.component';

describe('TakeUntilPageComponent', () => {
  let component: TakeUntilPageComponent;
  let fixture: ComponentFixture<TakeUntilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeUntilPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowHttpPageComponent } from './slow-http-page.component';

describe('SlowHttpPageComponent', () => {
  let component: SlowHttpPageComponent;
  let fixture: ComponentFixture<SlowHttpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowHttpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowHttpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

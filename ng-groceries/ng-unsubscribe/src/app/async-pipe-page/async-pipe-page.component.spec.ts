import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipePageComponent } from './async-pipe-page.component';

describe('AsyncPipePageComponent', () => {
  let component: AsyncPipePageComponent;
  let fixture: ComponentFixture<AsyncPipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDjComponent } from './pagination-dj.component';

describe('PaginationDjComponent', () => {
  let component: PaginationDjComponent;
  let fixture: ComponentFixture<PaginationDjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationDjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectListComponent } from './mat-select-list.component';

describe('MatSelectListComponent', () => {
  let component: MatSelectListComponent;
  let fixture: ComponentFixture<MatSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

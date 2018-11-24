import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzSelectListComponent } from './nz-select-list.component';

describe('NzSelectListComponent', () => {
  let component: NzSelectListComponent;
  let fixture: ComponentFixture<NzSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzSelectGridListComponent } from './nz-select-grid-list.component';

describe('NzSelectGridListComponent', () => {
  let component: NzSelectGridListComponent;
  let fixture: ComponentFixture<NzSelectGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzSelectGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzSelectGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

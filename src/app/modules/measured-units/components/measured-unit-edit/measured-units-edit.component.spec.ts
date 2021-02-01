import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredUnitEditComponent } from './measured-units-edit.component';

describe('MeasuredUnitEditComponent', () => {
  let component: MeasuredUnitEditComponent;
  let fixture: ComponentFixture<MeasuredUnitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuredUnitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

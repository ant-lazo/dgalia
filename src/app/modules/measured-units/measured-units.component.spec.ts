import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredUnitsComponent } from './measured-units.component';

describe('MeasuredUnitsComponent', () => {
  let component: MeasuredUnitsComponent;
  let fixture: ComponentFixture<MeasuredUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuredUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

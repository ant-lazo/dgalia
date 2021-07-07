import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredUnitRegisterComponent } from './measured-units-register.component';

describe('MeasuredUnitRegisterComponent', () => {
  let component: MeasuredUnitRegisterComponent;
  let fixture: ComponentFixture<MeasuredUnitRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuredUnitRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredUnitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

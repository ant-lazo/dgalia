import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramationCalendarComponent } from './programation-calendar.component';

describe('ProgramationCalendarComponent', () => {
  let component: ProgramationCalendarComponent;
  let fixture: ComponentFixture<ProgramationCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramationCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

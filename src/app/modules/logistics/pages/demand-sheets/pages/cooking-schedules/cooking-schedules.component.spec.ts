import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSchedulesComponent } from './cooking-schedules.component';

describe('CookingSchedulesComponent', () => {
  let component: CookingSchedulesComponent;
  let fixture: ComponentFixture<CookingSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

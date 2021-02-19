import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramationDetailTableComponent } from './programation-detail-table.component';

describe('ProgramationDetailTableComponent', () => {
  let component: ProgramationDetailTableComponent;
  let fixture: ComponentFixture<ProgramationDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramationDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramationDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

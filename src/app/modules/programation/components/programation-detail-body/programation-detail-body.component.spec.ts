import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramationDetailBodyComponent } from './programation-detail-body.component';

describe('ProgramationDetailBodyComponent', () => {
  let component: ProgramationDetailBodyComponent;
  let fixture: ComponentFixture<ProgramationDetailBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramationDetailBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramationDetailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

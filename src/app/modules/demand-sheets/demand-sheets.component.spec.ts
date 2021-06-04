import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandSheetsComponent } from './demand-sheets.component';

describe('DemandSheetsComponent', () => {
  let component: DemandSheetsComponent;
  let fixture: ComponentFixture<DemandSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

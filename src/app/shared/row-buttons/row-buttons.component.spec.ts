import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowButtonsComponent } from './row-buttons.component';

describe('RowButtonsComponent', () => {
  let component: RowButtonsComponent;
  let fixture: ComponentFixture<RowButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

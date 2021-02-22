import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyEditComponent } from './supply-edit.component';

describe('SupplyEditComponent', () => {
  let component: SupplyEditComponent;
  let fixture: ComponentFixture<SupplyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

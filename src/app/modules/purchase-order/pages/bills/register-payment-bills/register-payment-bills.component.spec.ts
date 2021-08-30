import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPaymentBillsComponent } from './register-payment-bills.component';

describe('RegisterPaymentBillsComponent', () => {
  let component: RegisterPaymentBillsComponent;
  let fixture: ComponentFixture<RegisterPaymentBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPaymentBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPaymentBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

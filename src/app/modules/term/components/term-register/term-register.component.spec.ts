import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyRegisterComponent } from './supply-register.component';

describe('SupplyRegisterComponent', () => {
  let component: SupplyRegisterComponent;
  let fixture: ComponentFixture<SupplyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

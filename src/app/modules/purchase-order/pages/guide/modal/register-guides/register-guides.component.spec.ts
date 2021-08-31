import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGuidesComponent } from './register-guides.component';

describe('RegisterGuidesComponent', () => {
  let component: RegisterGuidesComponent;
  let fixture: ComponentFixture<RegisterGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGuidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInputDialogComponent } from './register-input-dialog.component';

describe('RegisterInputDialogComponent', () => {
  let component: RegisterInputDialogComponent;
  let fixture: ComponentFixture<RegisterInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

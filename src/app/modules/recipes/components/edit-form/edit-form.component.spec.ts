import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeFormComponent } from './edit-form.component';

describe('EditRecipeFormComponent', () => {
  let component: EditRecipeFormComponent;
  let fixture: ComponentFixture<EditRecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRecipeFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

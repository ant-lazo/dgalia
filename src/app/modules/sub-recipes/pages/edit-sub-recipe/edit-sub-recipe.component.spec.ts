import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubRecipeComponent } from './edit-sub-recipe.component';

describe('EditSubRecipeComponent', () => {
  let component: EditSubRecipeComponent;
  let fixture: ComponentFixture<EditSubRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

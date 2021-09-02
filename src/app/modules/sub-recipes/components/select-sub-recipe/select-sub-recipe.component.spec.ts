import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubRecipeComponent } from './select-sub-recipe.component';

describe('SelectSubRecipeComponent', () => {
  let component: SelectSubRecipeComponent;
  let fixture: ComponentFixture<SelectSubRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSubRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

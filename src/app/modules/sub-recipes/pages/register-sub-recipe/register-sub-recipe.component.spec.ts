import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubRecipeComponent } from './register-sub-recipe.component';

describe('RegisterSubRecipeComponent', () => {
  let component: RegisterSubRecipeComponent;
  let fixture: ComponentFixture<RegisterSubRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSubRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSubRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

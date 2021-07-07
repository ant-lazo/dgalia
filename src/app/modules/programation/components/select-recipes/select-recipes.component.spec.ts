import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipesComponent } from './select-recipes.component';

describe('SelectRecipesComponent', () => {
  let component: SelectRecipesComponent;
  let fixture: ComponentFixture<SelectRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

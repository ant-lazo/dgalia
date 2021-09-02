import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRecipeListComponent } from './sub-recipe-list.component';

describe('SubRecipeListComponent', () => {
  let component: SubRecipeListComponent;
  let fixture: ComponentFixture<SubRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

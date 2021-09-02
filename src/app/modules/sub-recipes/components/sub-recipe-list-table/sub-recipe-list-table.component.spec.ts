import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRecipeListTableComponent } from './sub-recipe-list-table.component';

describe('SubRecipeListTableComponent', () => {
  let component: SubRecipeListTableComponent;
  let fixture: ComponentFixture<SubRecipeListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRecipeListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecipeListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

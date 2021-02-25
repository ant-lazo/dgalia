import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRecipesTableComponent } from './selected-recipes-table.component';

describe('SelectedRecipesTableComponent', () => {
  let component: SelectedRecipesTableComponent;
  let fixture: ComponentFixture<SelectedRecipesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedRecipesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRecipesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

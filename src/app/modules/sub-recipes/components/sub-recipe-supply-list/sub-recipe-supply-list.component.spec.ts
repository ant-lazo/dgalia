import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRecipeSupplyListComponent } from './sub-recipe-supply-list.component';

describe('SubRecipeSupplyListComponent', () => {
  let component: SubRecipeSupplyListComponent;
  let fixture: ComponentFixture<SubRecipeSupplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRecipeSupplyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecipeSupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

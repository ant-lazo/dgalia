import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSupplyListComponent } from './recipe-supply-list.component';

describe('RecipeSupplyListComponent', () => {
  let component: RecipeSupplyListComponent;
  let fixture: ComponentFixture<RecipeSupplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSupplyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

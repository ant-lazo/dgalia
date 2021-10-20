import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubRecipeComponent } from './detail-sub-recipe.component';

describe('DetailSubRecipeComponent', () => {
  let component: DetailSubRecipeComponent;
  let fixture: ComponentFixture<DetailSubRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSubRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSubRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

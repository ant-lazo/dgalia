import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRecipeSupplyModalComponent } from './sub-recipe-supply-modal.component';

describe('SubRecipeSupplyModalComponent', () => {
  let component: SubRecipeSupplyModalComponent;
  let fixture: ComponentFixture<SubRecipeSupplyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRecipeSupplyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecipeSupplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSupplyModalComponent } from './recipe-supply-modal.component';

describe('RecipeSupplyModalComponent', () => {
  let component: RecipeSupplyModalComponent;
  let fixture: ComponentFixture<RecipeSupplyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSupplyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSupplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

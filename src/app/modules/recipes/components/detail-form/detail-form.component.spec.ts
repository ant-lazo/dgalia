import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecipeFormComponent } from './detail-form.component';

describe('DetailRecipeFormComponent', () => {
  let component: DetailRecipeFormComponent;
  let fixture: ComponentFixture<DetailRecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailRecipeFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

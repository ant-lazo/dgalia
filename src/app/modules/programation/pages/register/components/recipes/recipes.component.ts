import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'app/modules/classes/models/class.model';
import { Course } from 'app/modules/course/models/course.interface';
import { CookingScheduleRecipe } from 'app/modules/programation/models/cooking-schedule.model';
import { SelectRecipeComponent } from 'app/modules/recipes/components/select-recipe/select-recipe.component';
import { Recipe } from 'app/modules/recipes/models/recipe.model';
import { RegisterPrgRecipeSelectedModel } from '../../models/register-form.model';

@Component({
  selector: 'programation-register-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnChanges {

  @Input() selectRecipe: void;
  @Input() classAppList: Class[];
  @Input() courseList: Course[];

  @Output() selectedRecipeList: EventEmitter<RegisterPrgRecipeSelectedModel[]> = new EventEmitter();

  public list: RegisterPrgRecipeSelectedModel[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'name', 'quantity', 'classList', 'courseList', 'date', 'actions'];
  public dataSource: MatTableDataSource<RegisterPrgRecipeSelectedModel> = new MatTableDataSource([]);

  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnChanges(): void {
    if (this.selectRecipe != null) this.openSelectRecipesModal();
  }

  ngOnInit(): void {
  }

  private openSelectRecipesModal() {
    const dialogRef = this._matDialog.open(SelectRecipeComponent, {
      width: '800px',
      height: '70%',
    });

    dialogRef.afterClosed().subscribe((result: Recipe) => {
      if (result) {
        const founded: RegisterPrgRecipeSelectedModel = this.list.find(e => e.id == result.id && e.id != result.id);
        if (!founded) this.setNewRecipeSelected(result);
      }
    });
  }

  private setNewRecipeSelected(recipe: Recipe): void {
    const newItem: RegisterPrgRecipeSelectedModel = {
      class_id: null,
      code: recipe.code,
      course_id: recipe.course.id,
      date: null,
      id: recipe.id,
      name: recipe.name,
      quantity: null
    }
    this.list.push(newItem);
    this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
    this.selectedRecipeList.emit(this.list);
  }

  public delete(id: number): void {
    const founded: RegisterPrgRecipeSelectedModel = this.list.find(e => e.id === id);
    if (founded) {
      const index: number = this.list.indexOf(founded);
      if (index !== 1) this.list.splice(index, 1);
      this.setDataSourceList();
    }
  }

}

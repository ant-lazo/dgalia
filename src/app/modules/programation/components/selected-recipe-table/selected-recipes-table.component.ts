import { Component, ViewChild, OnChanges, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CookingScheduleRecipe } from '../../models/cooking-schedule-recipe..model';

@Component({
  selector: 'app-selected-recipes-table',
  templateUrl: './selected-recipes-table.component.html',
  styleUrls: ['./selected-recipes-table.component.scss']
})
export class SelectedRecipesTableComponent implements OnChanges {

  @Input() list: CookingScheduleRecipe[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['image', 'code', 'name', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<CookingScheduleRecipe> = new MatTableDataSource([]);

  constructor() { }

  ngOnChanges(): void {
    if (this.list && this.list.length > 0) this.setDataSourceList(this.list);
  }

  public removeFromList(element: CookingScheduleRecipe): void {
    const i = this.list.indexOf(element);
    i !== -1 && this.list.splice(i, 1);
    this.setDataSourceList(this.list);
  }


  private setDataSourceList(list: CookingScheduleRecipe[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }
}

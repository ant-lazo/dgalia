import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CookingScheduleRecipe } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-programation-detail-table',
  templateUrl: './programation-detail-table.component.html',
  styleUrls: ['./programation-detail-table.component.scss']
})
export class ProgramationDetailTableComponent implements OnChanges {

  @Input() recipes: CookingScheduleRecipe[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['image', 'code', 'name', 'quantity', 'detail'];
  public dataSource: MatTableDataSource<CookingScheduleRecipe> = new MatTableDataSource([]);

  constructor() { }

  ngOnChanges(): void {
    if (this.recipes) this.setRecipeList();
  }

  private setRecipeList() {
    this.dataSource = new MatTableDataSource(this.recipes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

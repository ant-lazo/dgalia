import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { User } from "../../models/user";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-list-table.component.html",
  styleUrls: ["./user-list-table.component.scss"],
})
export class UserListTableComponent implements OnChanges {
  @Input() list: User[];
  @Output() selectedToDelete: EventEmitter<any> = new EventEmitter();
  @Output() selectedToEdit: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = [
    "fullname",
    "email",
    "cratedAt",
    "actions",
  ];
  public dataSource: MatTableDataSource<User> = new MatTableDataSource([]);

  constructor() {}

  ngOnChanges() {
    if (this.list) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

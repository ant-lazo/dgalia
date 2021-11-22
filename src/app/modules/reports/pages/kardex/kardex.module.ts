import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./components/list/list.component";
import { FormComponent } from "./components/form/form.component";
import { KardexComponent } from "./kardex.component";
import { KardexRoutingModule } from "./kardex-routing.module";

import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SearchBoxModule } from "app/shared/search-box/search-box.module";
import { MatSelectModule } from "@angular/material/select";
import { HeaderModule } from "app/shared/header/header.module";
import { LoadingBodyModule } from "app/shared/loading-body/loading-body.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { LabelModule } from "app/shared/label/label.module";

@NgModule({
  declarations: [KardexComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    KardexRoutingModule,
    MatSortModule,
    MatFormFieldModule,
    SearchBoxModule,
    MatSelectModule,
    HeaderModule,
    LoadingBodyModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    LabelModule,
  ],
})
export class KardexModule {}

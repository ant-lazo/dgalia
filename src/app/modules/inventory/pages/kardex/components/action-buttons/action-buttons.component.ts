import { Component, Input, OnInit } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { ProductKardex } from 'app/modules/inventory/models/product-kardex.model';
import { ProductInventory } from 'app/modules/inventory/models/product-inventory.model';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Input() productCode: string;
  //@Input() datain: ProductInventory[];

  constructor() { }

  ngOnInit(): void {
    
  }

  public downloadReportKardex(): void {
    console.log("codigo de producto: ",this.productCode);
    //location.href = ApiRoutes.inventory.kardexRerportDownload(this.prodcode);
    //location.href = "https://api.centrocannahope.com/api/medicalConsultation/getRecipe/consultation/5eda710968799d3dbccae5b9"
  }

  public downloadReportValoration(): void {
    console.log("codigo de producto: ",this.productCode);
    //location.href = ApiRoutes.inventory.valorationRerportDownload(this.prodcode);
  }

}

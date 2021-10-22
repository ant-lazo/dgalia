import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryComponent } from 'app/modules/inventory/inventory.component';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: []
})
export class ActionButtonsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public navigateToInventoryReport() {
    this._router.navigate([InventoryComponent.inventoryreport])
  }

}

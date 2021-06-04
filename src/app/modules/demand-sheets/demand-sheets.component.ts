import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand-sheets',
  templateUrl: './demand-sheets.component.html',
  styles: [
  ]
})
export class DemandSheetsComponent implements OnInit {

  public static listRoute: string = '/hojas-de-demanda/listado';

  constructor() { }

  ngOnInit(): void {
  }

}

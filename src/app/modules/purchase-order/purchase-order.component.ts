import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  template: `
    <div class="w-full">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class PurchaseOrderComponent implements OnInit {

  public static registerRoute = '/orden-de-compra/registro';
  public static listRoute = '/orden-de-compra/listado';
  public static detailRoute = '/orden-de-compra/detalle';
  public static updateRoute = '/orden-de-compra/editar';
  //para recargar la pagina de listado-factura
  public static  registerPaid= '/orden-de-compra/listado-Factura';


  constructor() { }

  ngOnInit(): void {
  }

}

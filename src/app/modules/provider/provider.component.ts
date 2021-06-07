import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  template: `
  <div class="w-full">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class ProviderComponent implements OnInit {

  public static updateRoute: string = '/proveedores/editar';
  public static registerRoute: string = '/proveedores/registro';
  public static listRoute: string = '/proveedores/listado';

  constructor() { }

  ngOnInit(): void {
  }

}

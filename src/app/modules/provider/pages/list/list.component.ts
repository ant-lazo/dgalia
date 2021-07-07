import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Provider } from '../../models/provider';
import { ProviderComponent } from '../../provider.component';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'provider-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public request: Observable<Provider[]>

  constructor(
    private _providers: ProviderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.request = this._providers.getAll();
  }

  public navigateToRegisterPage(): void {
    this._router.navigate([ProviderComponent.registerRoute]);
  }

}

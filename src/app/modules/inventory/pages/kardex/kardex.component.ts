import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductKardex } from '../../models/product-kardex.model';
import { InventoryService } from '../../services/inventory.service';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { ListOptionsComponent } from '../product-list/components/list-options/list-options.component';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styles: [
  ]
})
export class KardexComponent implements OnInit {


  public request: Observable<ProductKardex>;

  constructor(
    private _inventory: InventoryService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private get productCode(): string {
    return this._activatedRoute.snapshot.params.productCode;
  }
  

  private get headquarterId(): Number {
    return this._activatedRoute.snapshot.params.headquarterId;
  }



  ngOnInit(): void {
    //this.request = this._inventory.getKardex(this.productCode);
    this.request = this._inventory.getKardexByHeadquarter(this.productCode,this.headquarterId);
    console.log("productCode", this.productCode);
    console.log("headquarterId: ",this.headquarterId);

    /* Se implemento */
    //this._inventory.getKardex(this.productCode).subscribe(a=> {this.p=a.productName});
  }

}

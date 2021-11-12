import { Component, OnInit } from '@angular/core';
import { RankingFormModel } from '../ranking-product/models/register-form';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { RankingService } from './services/ranking.service';
import { FilterProduct } from './models/filter-products';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ranking-product',
  templateUrl: './ranking-product.component.html',
  styleUrls: []
})
export class RankingProductComponent implements OnInit {

  public form: RankingFormModel;
   start: any; 
   end: any;

   products : Observable<FilterProduct[]>;
   //products : FilterProduct[];

  constructor(
    private _ranking: RankingService
    ) { }

  ngOnInit(): void {
  }

  public listenFormChanges(form: RankingFormModel): void {
    this.form = form;
  }

  public onShowMethod(): void {
    this.start=moment(this.form.start_date).format("yyyy-MM-DD");
    this.end=moment(this.form.end_date).format("yyyy-MM-DD");
    this.setProducts();
  }

  public onDownloadMethod(): void {
  }

  public setProducts(): void{
    this.products = this._ranking.show(this.start,this.end,this.form.headquarterId);
  }

  /*private setRequestData(): void {
    this.request = combineLatest([
      this._classes.getList(),
      this._headquarters.getCompleteList(),
      this._courses.getCourseList(),
      this._terms.getCompleteList(),
    ])
  }*/

}

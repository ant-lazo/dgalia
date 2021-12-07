import { Component, OnInit } from '@angular/core';
import { RankingFormModel } from '../ranking-product/models/register-form';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { RankingService } from './services/ranking.service';
import { FilterProduct } from './models/filter-products';
import { combineLatest, Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { ShowFormHelper } from './helpers/show-form-validations.helper';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';


@Component({
  selector: 'app-ranking-product',
  templateUrl: './ranking-product.component.html',
  styleUrls: []
})
export class RankingProductComponent implements OnInit {

  public request: Observable<FilterProduct[]>;   
   public form: RankingFormModel;
   start: any; 
   end: any;
   productsfilter : FilterProduct[] =[];

   dateDay = Date.now();
   today: string;
   t30before: string;

  constructor(
    private _ranking: RankingService,
    private _helper: ShowFormHelper,
    private _notifications: AppNotificationsService
    ) { }

  ngOnInit(): void {
    this.setDefaultData();
    //console.log("fecha hoy",moment(this.dateDay).format("yyyy-MM-DD"));
    this.today=moment(this.dateDay).format("yyyy-MM-DD");
    //console.log("fecha -30 dias",moment(this.dateDay).add(-30,'d').format("yyyy-MM-DD"));
    this.t30before=moment(this.dateDay).add(-30,'d').format("yyyy-MM-DD");
  }

  public listenFormChanges(form: RankingFormModel): void {
    this.form = form;
  }

  public onShowMethod(): void {

    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }


    this.start=moment(this.form.start_date).format("yyyy-MM-DD");
    //console.log("start: ",this.start);
    this.end=moment(this.form.end_date).format("yyyy-MM-DD");
    //console.log("end: ",this.end);
    this.setProducts();
    console.log("FilterProduct", this.productsfilter)
  }

  public onDownloadMethod(): void {

    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }

    location.href = ApiRoutes.reports.getRankingDownlad(this.start,this.end,this.form.headquarterId);
  }

  public setProducts(): void{
    this.request = this._ranking.show(this.start,this.end,this.form.headquarterId);
    this.request.subscribe(r => {
      this.productsfilter = r;
    });
  }

  private setDefaultData(): void {
    this.request = this._ranking.show(this.today, this.t30before, 1);
    this.request.subscribe(r => {
      this.productsfilter = r;
    });
  }

}

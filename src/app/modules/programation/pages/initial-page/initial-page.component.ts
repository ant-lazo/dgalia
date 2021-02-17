import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectDateComponent } from '../../components/select-date/select-date.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(
    private _router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  selectDate(){
    const dialogRef = this.dialog.open(SelectDateComponent, {
      width: '620px',
      height: '300px',
  });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.listado(result);
    });

  }

  listado(rango?:any){
    this._router.navigate(['programacion/listado/'+rango.start+'/'+rango.end]);
  }
}

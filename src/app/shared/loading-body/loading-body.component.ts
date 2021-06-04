import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-body',
  templateUrl: './loading-body.component.html',
  styles: [
  ]
})
export class LoadingBodyComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}

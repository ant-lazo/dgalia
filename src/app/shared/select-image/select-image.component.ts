import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styles: [
    '.upload__image {border-radius: 12px;}'
  ]
})
export class SelectImageComponent implements OnInit {

  public imgFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  public setImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.imgFile = event.target.files[0];
      
    }
    
  }

}

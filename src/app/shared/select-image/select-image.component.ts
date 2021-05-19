import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styles: [
    '.upload__image {border-radius: 12px; }'
  ]
})
export class SelectImageComponent implements OnInit {

  @Output() fileSelected: EventEmitter<File> = new EventEmitter();;

  public imgFile: File;
  public imgReader: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
  }

  public setImage( ): void {    
    if (this.imgFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
      reader.onload = () => {
        this.imgReader = reader.result;
        this.fileSelected.emit(this.imgFile);
      }
    }
  }

}

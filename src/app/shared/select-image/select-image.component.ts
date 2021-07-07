import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styles: [
    '.upload__image {border-radius: 12px; }'
  ]
})
export class SelectImageComponent implements OnInit {

  @Input() defaultImage: string;
  @Output() fileSelected: EventEmitter<File> = new EventEmitter();

  public imgFile: File;
  public imgReader: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
    if (!this.defaultImage) this.defaultImage = 'assets/images/dgalia/backgroud/no-image.png';
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

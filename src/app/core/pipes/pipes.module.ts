import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDocumentsPipe } from './get-documents.pipe';



@NgModule({
  declarations: [
    GetDocumentsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetDocumentsPipe
  ]
})
export class PipesModule { }

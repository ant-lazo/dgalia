import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'environments/environment';

@Pipe({
  name: 'getDocuments'
})
export class GetDocumentsPipe implements PipeTransform {

  transform(value: unknown, type: string): string {
    let url: string = `${environment.apiUrl}document/`
    switch (type) {
      case 'product':
        url = url + 'product?name=' + value;
        break;
      default:
        url = 'assets/images/dgalia/logo/logo-orange.jpg';
        break;
    }
    return url;
  }

}

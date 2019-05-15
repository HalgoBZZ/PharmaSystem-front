import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExpirationProd'
})
export class FilterExpirationProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.expiration.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }
}

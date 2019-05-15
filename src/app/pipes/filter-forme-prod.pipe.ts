import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFormeProd'
})
export class FilterFormeProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.forme_prod.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

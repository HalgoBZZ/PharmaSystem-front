import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReferenceProd'
})
export class FilterReferenceProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.ref_prod.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

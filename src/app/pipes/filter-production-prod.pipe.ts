import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductionProd'
})
export class FilterProductionProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.production_prod.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

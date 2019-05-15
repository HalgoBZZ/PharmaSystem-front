import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDosageProd'
})
export class FilterDosageProdPipe implements PipeTransform {
  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.dosage_prod.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }
}

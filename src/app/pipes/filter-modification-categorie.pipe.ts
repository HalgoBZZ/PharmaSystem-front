import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModificationCategorie'
})
export class FilterModificationCategoriePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.date_modification.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

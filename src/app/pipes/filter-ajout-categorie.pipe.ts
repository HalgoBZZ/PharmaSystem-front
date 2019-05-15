import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAjoutCategorie'
})
export class FilterAjoutCategoriePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.date_ajout.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }
}

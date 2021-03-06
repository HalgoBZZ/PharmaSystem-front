import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNomCategorie'
})
export class FilterNomCategoriePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.nom_cat.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategorieProd'
})
export class FilterCategorieProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.categorie.nom_cat.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

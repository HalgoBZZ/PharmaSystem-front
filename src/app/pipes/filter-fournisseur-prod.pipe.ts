import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFournisseurProd'
})
export class FilterFournisseurProdPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const produit = it.fournisseur.nom_four.toString().toLowerCase().includes(value.toLowerCase());
        return (produit);
    });
  }

}

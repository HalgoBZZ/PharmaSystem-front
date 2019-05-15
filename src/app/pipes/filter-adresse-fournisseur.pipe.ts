import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdresseFournisseur'
})
export class FilterAdresseFournisseurPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const fournisseur = it.adresse_four.toString().toLowerCase().includes(value.toLowerCase());
        return (fournisseur);
    });
  }


}

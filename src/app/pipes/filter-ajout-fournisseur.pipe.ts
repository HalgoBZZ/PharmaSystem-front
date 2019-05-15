import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAjoutFournisseur'
})
export class FilterAjoutFournisseurPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const fournisseur = it.date_ajout.toString().toLowerCase().includes(value.toLowerCase());
        return (fournisseur);
    });
  }

}

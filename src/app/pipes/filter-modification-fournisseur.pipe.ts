import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModificationFournisseur'
})
export class FilterModificationFournisseurPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const fournisseur = it.date_modification.toString().toLowerCase().includes(value.toLowerCase());
        return (fournisseur);
    });
  }


}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEtatConge'
})
export class FilterEtatCongePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const conge = it.etat_conges.toString().toLowerCase().includes(value.toLowerCase());
        return (conge);
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDebutConge'
})
export class FilterDebutCongePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const conge = it.date_debut.toString().toLowerCase().includes(value.toLowerCase());
        return (conge);
    });
  }


}

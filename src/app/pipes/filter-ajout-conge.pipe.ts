import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAjoutConge'
})
export class FilterAjoutCongePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const conge = it.date_ajout.toString().toLowerCase().includes(value.toLowerCase());
        return (conge);
    });
  }

}

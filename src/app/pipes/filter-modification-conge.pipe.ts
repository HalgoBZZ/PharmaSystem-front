import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModificationConge'
})
export class FilterModificationCongePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const conge = it.date_modification.toString().toLowerCase().includes(value.toLowerCase());
        return (conge);
    });
  }

}

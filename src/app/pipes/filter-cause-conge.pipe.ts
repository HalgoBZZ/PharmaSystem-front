import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCauseConge'
})
export class FilterCauseCongePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const conge = it.cause.toString().toLowerCase().includes(value.toLowerCase());
        return (conge);
    });
  }

}

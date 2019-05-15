import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNomEmploye'
})
export class FilterNomEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const employe = it.nom_emp.toString().toLowerCase().includes(value.toLowerCase());
        return (employe);
    });
}
}

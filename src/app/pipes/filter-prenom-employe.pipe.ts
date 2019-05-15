import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrenomEmploye'
})
export class FilterPrenomEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const employe = it.prenom_emp.toString().toLowerCase().includes(value.toLowerCase());
        return (employe);
    });
}
}

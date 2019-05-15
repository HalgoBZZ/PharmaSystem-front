import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDateNaissEmploye'
})
export class FilterDateNaissEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const employe = it.date_naiss_emp.toString().toLowerCase().includes(value.toLowerCase());
        return (employe);
    });
}

}

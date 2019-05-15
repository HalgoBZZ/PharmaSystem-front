import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelEmploye'
})
export class FilterTelEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const employe = it.tel_emp.toString().toLowerCase().includes(value.toLowerCase());
        return (employe);
    });
}

}

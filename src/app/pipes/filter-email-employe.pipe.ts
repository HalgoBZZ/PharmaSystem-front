import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmailEmploye'
})
export class FilterEmailEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const employe = it.email_emp.toString().toLowerCase().includes(value.toLowerCase());
        return (employe);
    });
}

}

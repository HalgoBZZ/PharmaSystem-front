import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdresseEmploye'
})
export class FilterAdresseEmployePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const adresse = it.adresse.toString().toLowerCase().includes(value.toLowerCase());
        return (adresse);
    });
}

}



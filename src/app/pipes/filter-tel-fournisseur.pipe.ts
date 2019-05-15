import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelFournisseur'
})
export class FilterTelFournisseurPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const fournisseur = it.tel_four.toString().toLowerCase().includes(value.toLowerCase());
        return (fournisseur);
    });
  }


}

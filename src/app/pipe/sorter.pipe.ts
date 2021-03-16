import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any, key: string, asc: boolean): any[] {
    if(!Array.isArray(value) || key===undefined){
      return value;
    }
    return value.sort((a, b) => {
      if(typeof a[key]==='number' && typeof b[key]==='number'){
        return asc? a[key]-b[key]: b[key]-a[key];
      } else {
        return asc?
              String(a[key]).toLowerCase().localeCompare(String(b[key]).toLowerCase()):
              String(b[key]).toLowerCase().localeCompare(String(a[key]).toLowerCase());
      }
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celular'
})
export class CelularPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return '('
      + value.substr(0, 2)
      + ') '
      + value.substr(2, 5)
      + '-'
      + value.substr(7, 4)
  }

}

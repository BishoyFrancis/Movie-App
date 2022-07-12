import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeColon'
})
export class RemoveColonPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/:/g,'');
  }

}

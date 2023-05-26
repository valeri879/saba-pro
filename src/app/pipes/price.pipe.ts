import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    return `${value.toFixed(2)}${args[0]}`;
  }

}

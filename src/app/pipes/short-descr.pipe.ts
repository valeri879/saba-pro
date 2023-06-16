import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescr'
})
export class ShortDescrPipe implements PipeTransform {

  transform(value: string ): string {
    console.log(value);
    const pattern = /<[^>]+>/g;
    return `${value.replace(pattern, "").slice(0, 100)}...`;
  }

}

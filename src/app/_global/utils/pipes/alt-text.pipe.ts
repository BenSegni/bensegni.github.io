import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altText'
})
export class AltTextPipe implements PipeTransform {

  transform(value: string): unknown {
    const altText = `${value.substring(value.lastIndexOf( '/' ) + 1, value.lastIndexOf( '.' ))} logo`

    return altText;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'altText',
    standalone: false
})
export class AltTextPipe implements PipeTransform {

  transform(imageUrl: string): string {
    const altText = `${imageUrl.substring(imageUrl.lastIndexOf( '/' ) + 1, imageUrl.lastIndexOf( '.' ))} logo`

    return altText;
  }
}

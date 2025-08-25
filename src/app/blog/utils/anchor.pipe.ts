import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'anchor',
    standalone: false
})
export class AnchorPipe implements PipeTransform {

  transform(anchor: string): string {
    const capitalisedAnchor = `#${anchor.charAt(0).toUpperCase()}${anchor.slice(1)}level`;
    return capitalisedAnchor;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { getFilterLink } from '../maps/filter-link-maps';

@Pipe({
    name: 'filterLink',
})
export class FilterLinkPipe implements PipeTransform {

  transform(type: string): string {
    return getFilterLink(type);
  }

}

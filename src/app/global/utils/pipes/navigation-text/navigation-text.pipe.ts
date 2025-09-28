import { Pipe, PipeTransform } from '@angular/core';
import { getNavigationSubText } from '../maps/navigation-text-maps';

@Pipe({
    name: 'navigationText',
})
export class NavigationTextPipe implements PipeTransform {

  transform(routeText: string): string {
    return getNavigationSubText(routeText);
  }

}

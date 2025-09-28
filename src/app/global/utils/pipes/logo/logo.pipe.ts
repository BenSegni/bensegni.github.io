import { Pipe, PipeTransform } from '@angular/core';

import { getLogoForValue } from '../maps/logo-maps';

@Pipe({
    name: 'logo',
    standalone: true
})
export class LogoPipe implements PipeTransform {

  transform(value: string): string {
    return getLogoForValue(value);
  }
}

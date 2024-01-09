import { Pipe, PipeTransform } from '@angular/core';
import { NavigationEnum } from '../../enum/navigation.enum';
import { SubTextEnum } from '../../enum/navigation-subtext.enum';

@Pipe({
  name: 'navigationText'
})
export class NavigationTextPipe implements PipeTransform {

  transform(routeText: string): string {
    switch(routeText) {
        case NavigationEnum.Behance: return SubTextEnum.Behance;
        case NavigationEnum.About: return SubTextEnum.About;
        case NavigationEnum.Contact: return SubTextEnum.Contact;
        case NavigationEnum.CurrentProject: return SubTextEnum.CurrentProject;
        case NavigationEnum.Github: return SubTextEnum.Github;
        case NavigationEnum.LinkedIn: return SubTextEnum.LinkedIn;
        case NavigationEnum.Showcase: return SubTextEnum.Showcase;
        default: return '';
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { NavigationEnum } from '../../enum/navigation.enum';
import { SubTextEnum } from '../../enum/navigation-subtext.enum';

@Pipe({
  name: 'navigationText'
})
export class NavigationTextPipe implements PipeTransform {

  transform(routeText: string): string {
    switch(routeText) {
        case NavigationEnum.Showcase: return SubTextEnum.Showcase;
        case NavigationEnum.About: return SubTextEnum.About;
        case NavigationEnum.CurrentProject: return SubTextEnum.CurrentProject;
        case NavigationEnum.Github: return SubTextEnum.Github;
        case NavigationEnum.Contact: return SubTextEnum.Contact;
        default: return '';
    }
  }

}

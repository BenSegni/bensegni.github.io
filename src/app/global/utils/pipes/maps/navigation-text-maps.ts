import { NavigationEnum } from '../../../enum/navigation.enum';
import { SubTextEnum } from '../../../enum/navigation-subtext.enum';

export function getNavigationSubText(routeText: string): string {
  if (!routeText) return '';

  switch(routeText) {
    case NavigationEnum.Behance: return SubTextEnum.Behance;
    case NavigationEnum.Blog: return SubTextEnum.Blog;
    case NavigationEnum.About: return SubTextEnum.About;
    case NavigationEnum.Contact: return SubTextEnum.Contact;
    case NavigationEnum.CurrentProject: return SubTextEnum.CurrentProject;
    case NavigationEnum.Github: return SubTextEnum.Github;
    case NavigationEnum.NPM: return SubTextEnum.NPM;
    case NavigationEnum.LinkedIn: return SubTextEnum.LinkedIn;
    case NavigationEnum.Showcase: return SubTextEnum.Showcase;
    default: return '';
  }
}

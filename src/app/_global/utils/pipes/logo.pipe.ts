import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { LogoEnum } from '../../enum/logo.enum';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  transform(value: string): string {
    switch(true) {
        case value.includes(TechnologyEnum.Angular): return LogoEnum.Angular;
        case value.includes(TechnologyEnum.Cypress): return LogoEnum.Cypress;
        case value.includes(TechnologyEnum.RXJS): return LogoEnum.RXJS;
        case value.includes(TechnologyEnum.Typescript): return LogoEnum.Typescript;
        case value.includes(TechnologyEnum.SASS): return LogoEnum.SASS;
        case value.includes(TechnologyEnum.UI): return LogoEnum.UI;
        case value.includes(TechnologyEnum.NGRX): return LogoEnum.NGRX;
        case value.includes(TechnologyEnum.Jest): return LogoEnum.Jest;
        case value.includes(TechnologyEnum.Jasmine): return LogoEnum.Jasmine;
        case value.includes(TechnologyEnum.NestJS): return LogoEnum.NestJs;
        case value.includes(TechnologyEnum.Pact): return LogoEnum.Pact;
        case value.includes(TechnologyEnum.HTML5): return LogoEnum.HTML5;
        case value.includes(TechnologyEnum.Ionic): return LogoEnum.Ionic;
        case value.includes(TechnologyEnum.Directus): return LogoEnum.Directus;
        case value.includes(TechnologyEnum.Java): return LogoEnum.Java;
        default: return LogoEnum.Agile
    }
  }

}

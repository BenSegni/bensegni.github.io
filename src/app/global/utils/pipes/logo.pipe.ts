import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { LogoEnum } from '../../enum/logo.enum';
import { ToolkitEnum } from '../../enum/toolkit.enum';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  transform(value: string): string {
    switch(true) {
        //technology logos
        case value.includes(TechnologyEnum.Agile): return LogoEnum.Agile;
        case value.includes(TechnologyEnum.Angular): return LogoEnum.Angular;
        case value.includes(TechnologyEnum.Cypress): return LogoEnum.Cypress;
        case value.includes(TechnologyEnum.Directus): return LogoEnum.Directus;
        case value.includes(TechnologyEnum.HTML5): return LogoEnum.HTML5;
        case value.includes(TechnologyEnum.Ionic): return LogoEnum.Ionic;
        case value.includes(TechnologyEnum.Java): return LogoEnum.Java;
        case value.includes(TechnologyEnum.Jasmine): return LogoEnum.Jasmine;
        case value.includes(TechnologyEnum.Jest): return LogoEnum.Jest;
        case value.includes(TechnologyEnum.NGRX): return LogoEnum.NGRX;
        case value.includes(TechnologyEnum.NestJS): return LogoEnum.NestJs;
        case value.includes(TechnologyEnum.Pact): return LogoEnum.Pact;
        case value.includes(TechnologyEnum.Typescript): return LogoEnum.Typescript;
        case value.includes(TechnologyEnum.RXJS): return LogoEnum.RXJS;
        case value.includes(TechnologyEnum.SASS): return LogoEnum.SASS;
        case value.includes(TechnologyEnum.UI): return LogoEnum.UI;
        //toolkit logos
        case value.includes(ToolkitEnum.Docker): return LogoEnum.Docker;
        case value.includes(ToolkitEnum.Github): return LogoEnum.Github;
        case value.includes(ToolkitEnum.Gitlab): return LogoEnum.Gitlab;
        case value.includes(ToolkitEnum.Illustrator): return LogoEnum.Illustrator;
        case value.includes(ToolkitEnum.InDesign): return LogoEnum.InDesign;
        case value.includes(ToolkitEnum.Inkscape): return LogoEnum.Inkscape;
        case value.includes(ToolkitEnum.Postman): return LogoEnum.Postman;
        case value.includes(ToolkitEnum.Photoshop): return LogoEnum.Photoshop;
        case value.includes(ToolkitEnum.XD): return LogoEnum.XD;
        case value.includes(ToolkitEnum.VSCode): return LogoEnum.VSCode;
        default: return LogoEnum.Logo
    }
  }

}

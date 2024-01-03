import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { LinkEnum } from '../../enum/links.enum';
import { ToolkitEnum } from '../../enum/toolkit.enum';

@Pipe({
  name: 'filterLink'
})
export class FilterLinkPipe implements PipeTransform {

  transform(type: string): string {
    switch(true) {
        case type.includes(TechnologyEnum.Angular): return LinkEnum.Angular;
        case type.includes(TechnologyEnum.Cypress): return LinkEnum.Cypress;
        case type.includes(TechnologyEnum.Directus): return LinkEnum.Directus;
        case type.includes(TechnologyEnum.HTML5): return LinkEnum.HTML5;
        case type.includes(TechnologyEnum.Ionic): return LinkEnum.Ionic;
        case type.includes(TechnologyEnum.Jasmine): return LinkEnum.Jasmine;
        case type.includes(TechnologyEnum.Jest): return LinkEnum.Jest;
        case type.includes(TechnologyEnum.NestJS): return LinkEnum.NestJS;
        case type.includes(TechnologyEnum.NGRX): return LinkEnum.NGRX;
        case type.includes(TechnologyEnum.Pact): return LinkEnum.Pact;
        case type.includes(TechnologyEnum.RXJS): return LinkEnum.RXJS;
        case type.includes(TechnologyEnum.SASS): return LinkEnum.SASS;
        case type.includes(TechnologyEnum.Typescript): return LinkEnum.Typescript;
        case type.includes(TechnologyEnum.UI): return LinkEnum.UI;
        case type.includes(ToolkitEnum.Docker): return LinkEnum.Docker;
        case type.includes(ToolkitEnum.Github): return LinkEnum.Github;
        case type.includes(ToolkitEnum.Gitlab): return LinkEnum.Gitlab;
        case type.includes(ToolkitEnum.Illustrator): return LinkEnum.Illustrator;
        case type.includes(ToolkitEnum.InDesign): return LinkEnum.InDesign;
        case type.includes(ToolkitEnum.Inkscape): return LinkEnum.Inkscape;
        case type.includes(ToolkitEnum.Photoshop): return LinkEnum.Photoshop;
        case type.includes(ToolkitEnum.Postman): return LinkEnum.Postman;
        case type.includes(ToolkitEnum.XD): return LinkEnum.XD;
        case type.includes(ToolkitEnum.VSCode): return LinkEnum.VSCode;
        default: return '/'
    }
  }

}

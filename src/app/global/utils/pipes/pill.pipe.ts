import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { ColorPaletteEnum } from '../../enum/color-palette.enum';
import { KeywordsEnum } from '../../enum/keywords.enum';
import { ToolkitEnum } from '../../enum/toolkit.enum';

@Pipe({
  name: 'pill'
})
export class PillPipe implements PipeTransform {


  transform(value: string): string {
    switch(true) {
        //keyword pills
        case value.includes(KeywordsEnum.Code): return ColorPaletteEnum.red;
        case value.includes(KeywordsEnum.Contact): return ColorPaletteEnum.limeGreen;
        case value.includes(KeywordsEnum.Design): return ColorPaletteEnum.hotterPink;
        case value.includes(KeywordsEnum.Development): return ColorPaletteEnum.limeGreen;
        case value.includes(KeywordsEnum.Education): return ColorPaletteEnum.smokeyBlue;
        case value.includes(KeywordsEnum.Email): return ColorPaletteEnum.beetroot;
        case value.includes(KeywordsEnum.Experience): return ColorPaletteEnum.pink;
        case value.includes(KeywordsEnum.Portfolio): return ColorPaletteEnum.pinkPurple;
        case value.includes(KeywordsEnum.Skills): return ColorPaletteEnum.smokeyBlue;
        //technology pills
        case value.includes(TechnologyEnum.Angular): return ColorPaletteEnum.red;
        case value.includes(TechnologyEnum.Cypress): return ColorPaletteEnum.limeGreen;
        case value.includes(TechnologyEnum.HTML5): return ColorPaletteEnum.bloodRed;
        case value.includes(TechnologyEnum.Ionic): return ColorPaletteEnum.smokeyBlue;
        case value.includes(TechnologyEnum.Jasmine): return ColorPaletteEnum.beetroot;
        case value.includes(TechnologyEnum.Jest): return ColorPaletteEnum.red;
        case value.includes(TechnologyEnum.NestJS): return ColorPaletteEnum.pinkRed;
        case value.includes(TechnologyEnum.NGRX): return ColorPaletteEnum.pinkPurple;
        case value.includes(TechnologyEnum.RXJS): return ColorPaletteEnum.hotterPink;
        case value.includes(TechnologyEnum.React): return ColorPaletteEnum.reactBlue;
        case value.includes(TechnologyEnum.SASS): return ColorPaletteEnum.pink;
        case value.includes(TechnologyEnum.Typescript): return ColorPaletteEnum.blue;
        case value.includes(TechnologyEnum.UI): return ColorPaletteEnum.hotPink;
        //toolkit pills
        case value.includes(ToolkitEnum.Docker): return ColorPaletteEnum.dockerBlue;
        case value.includes(ToolkitEnum.Figma): return ColorPaletteEnum.figmaPink;
        case value.includes(ToolkitEnum.Gitlab): return ColorPaletteEnum.gitlabOrange;
        case value.includes(ToolkitEnum.Illustrator): return ColorPaletteEnum.gold;
        case value.includes(ToolkitEnum.InDesign): return ColorPaletteEnum.indesignPink;
        case value.includes(ToolkitEnum.Inkscape): return ColorPaletteEnum.inkscapeWhite;
        case value.includes(ToolkitEnum.Photoshop): return ColorPaletteEnum.photoshopBlue;
        case value.includes(ToolkitEnum.Postman): return ColorPaletteEnum.postmanOrange;
        case value.includes(ToolkitEnum.XD): return ColorPaletteEnum.xdPink;
        case value.includes(ToolkitEnum.VSCode): return ColorPaletteEnum.vsCodeBlue;
        default: return 'white'
    }
  }

}

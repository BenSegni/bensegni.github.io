import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { ColorPaletteEnum } from '../../enum/color-palette.enum';
import { KeywordsEnum } from '../../enum/keywords.enum';

@Pipe({
  name: 'pill'
})
export class PillPipe implements PipeTransform {


  transform(value: string): string {
    switch(true) {
        case value.includes(TechnologyEnum.Angular): return ColorPaletteEnum.red;
        case value.includes(KeywordsEnum.Code): return ColorPaletteEnum.red;
        case value.includes(KeywordsEnum.Contact): return ColorPaletteEnum.limeGreen;
        case value.includes(TechnologyEnum.Cypress): return ColorPaletteEnum.limeGreen;
        case value.includes(KeywordsEnum.Design): return ColorPaletteEnum.hotterPink;
        case value.includes(KeywordsEnum.Development): return ColorPaletteEnum.limeGreen;
        case value.includes(KeywordsEnum.Education): return ColorPaletteEnum.smokeyBlue;
        case value.includes(KeywordsEnum.Email): return ColorPaletteEnum.beetroot;
        case value.includes(KeywordsEnum.Experience): return ColorPaletteEnum.pink;
        case value.includes(TechnologyEnum.HTML5): return ColorPaletteEnum.bloodRed;
        case value.includes(TechnologyEnum.Jasmine): return ColorPaletteEnum.beetroot;
        case value.includes(TechnologyEnum.Ionic): return ColorPaletteEnum.smokeyBlue;
        case value.includes(TechnologyEnum.NestJS): return ColorPaletteEnum.pinkRed;
        case value.includes(TechnologyEnum.NGRX): return ColorPaletteEnum.pinkPurple;
        case value.includes(KeywordsEnum.Portfolio): return ColorPaletteEnum.pinkPurple;
        case value.includes(TechnologyEnum.Jest): return ColorPaletteEnum.red;
        case value.includes(TechnologyEnum.RXJS): return ColorPaletteEnum.hotterPink;
        case value.includes(TechnologyEnum.SASS): return ColorPaletteEnum.pink;
        case value.includes(KeywordsEnum.Skills): return ColorPaletteEnum.smokeyBlue;
        case value.includes(TechnologyEnum.Typescript): return ColorPaletteEnum.blue;
        case value.includes(TechnologyEnum.UI): return ColorPaletteEnum.hotPink;
        case value.includes(KeywordsEnum.UI): return ColorPaletteEnum.hotPink;
        default: return 'white'
    }
  }

}

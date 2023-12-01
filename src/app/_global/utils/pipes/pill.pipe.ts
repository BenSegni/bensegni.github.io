import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyEnum } from '../../enum/technology.enum';
import { ColorPaletteEnum } from '../../enum/color-palette.enum';

@Pipe({
  name: 'pill'
})
export class PillPipe implements PipeTransform {


  transform(value: string): string {
    switch(value) {
        case TechnologyEnum.UI: return ColorPaletteEnum.hotPink;
        case TechnologyEnum.Typescript: return ColorPaletteEnum.blue;
        case TechnologyEnum.SASS: return ColorPaletteEnum.pink;
        case TechnologyEnum.Angular: return ColorPaletteEnum.red;
        case TechnologyEnum.HTML5: return ColorPaletteEnum.bloodRed;
        default: return 'white'
    }
  }

}

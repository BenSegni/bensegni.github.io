import { ColorPaletteEnum } from "../../../enum/color-palette.enum";
import { KeywordsEnum } from "../../../enum/keywords.enum";
import { TechnologyEnum } from "../../../enum/technology.enum";
import { ToolkitEnum } from "../../../enum/toolkit.enum";

export function getPillColor(value: string): string {
  if (!value) {
    return ColorPaletteEnum.white;
  }

  // Keyword pills
  if (value.includes(KeywordsEnum.Code)) return ColorPaletteEnum.red;
  if (value.includes(KeywordsEnum.Contact)) return ColorPaletteEnum.limeGreen;
  if (value.includes(KeywordsEnum.Design)) return ColorPaletteEnum.hotterPink;
  if (value.includes(KeywordsEnum.Development)) return ColorPaletteEnum.limeGreen;
  if (value.includes(KeywordsEnum.Education)) return ColorPaletteEnum.smokeyBlue;
  if (value.includes(KeywordsEnum.Email)) return ColorPaletteEnum.beetroot;
  if (value.includes(KeywordsEnum.Experience)) return ColorPaletteEnum.pink;
  if (value.includes(KeywordsEnum.Portfolio)) return ColorPaletteEnum.pinkPurple;
  if (value.includes(KeywordsEnum.Skills)) return ColorPaletteEnum.smokeyBlue;

  // Technology pills
  if (value.includes(TechnologyEnum.Angular)) return ColorPaletteEnum.red;
  if (value.includes(TechnologyEnum.Cypress)) return ColorPaletteEnum.limeGreen;
  if (value.includes(TechnologyEnum.HTML5)) return ColorPaletteEnum.bloodRed;
  if (value.includes(TechnologyEnum.Ionic)) return ColorPaletteEnum.smokeyBlue;
  if (value.includes(TechnologyEnum.Jasmine)) return ColorPaletteEnum.beetroot;
  if (value.includes(TechnologyEnum.Jest)) return ColorPaletteEnum.red;
  if (value.includes(TechnologyEnum.NestJS)) return ColorPaletteEnum.pinkRed;
  if (value.includes(TechnologyEnum.NGRX)) return ColorPaletteEnum.pinkPurple;
  if (value.includes(TechnologyEnum.RXJS)) return ColorPaletteEnum.hotterPink;
  if (value.includes(TechnologyEnum.React)) return ColorPaletteEnum.reactBlue;
  if (value.includes(TechnologyEnum.SASS)) return ColorPaletteEnum.pink;
  if (value.includes(TechnologyEnum.TDD)) return ColorPaletteEnum.tdd;
  if (value.includes(TechnologyEnum.Typescript)) return ColorPaletteEnum.blue;
  if (value.includes(TechnologyEnum.UI)) return ColorPaletteEnum.hotPink;

  // Toolkit pills
  if (value.includes(ToolkitEnum.Docker)) return ColorPaletteEnum.dockerBlue;
  if (value.includes(ToolkitEnum.Figma)) return ColorPaletteEnum.figmaPink;
  if (value.includes(ToolkitEnum.Gitlab)) return ColorPaletteEnum.gitlabOrange;
  if (value.includes(ToolkitEnum.Illustrator)) return ColorPaletteEnum.gold;
  if (value.includes(ToolkitEnum.InDesign)) return ColorPaletteEnum.indesignPink;
  if (value.includes(ToolkitEnum.Inkscape)) return ColorPaletteEnum.inkscapeWhite;
  if (value.includes(ToolkitEnum.Photoshop)) return ColorPaletteEnum.photoshopBlue;
  if (value.includes(ToolkitEnum.Postman)) return ColorPaletteEnum.postmanOrange;
  if (value.includes(ToolkitEnum.XD)) return ColorPaletteEnum.xdPink;
  if (value.includes(ToolkitEnum.VSCode)) return ColorPaletteEnum.vsCodeBlue;

  return ColorPaletteEnum.white;
}

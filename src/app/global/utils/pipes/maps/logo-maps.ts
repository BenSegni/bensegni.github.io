import { LogoEnum } from "../../../enum/logo.enum";
import { TechnologyEnum } from "../../../enum/technology.enum";
import { ToolkitEnum } from "../../../enum/toolkit.enum";
import { LevelEnum } from "../../../../blog/enum/level.enum";

export function getLogoForValue(value: string): string {
  if (!value) return LogoEnum.Logo;

  // technology logos
  if (value.includes(TechnologyEnum.Agile)) return LogoEnum.Agile;
  if (value.includes(TechnologyEnum.Angular)) return LogoEnum.Angular;
  if (value.includes(TechnologyEnum.Cypress)) return LogoEnum.Cypress;
  if (value.includes(TechnologyEnum.Directus)) return LogoEnum.Directus;
  if (value.includes(TechnologyEnum.Express)) return LogoEnum.ExpressJs;
  if (value.includes(TechnologyEnum.HTML5)) return LogoEnum.HTML5;
  if (value.includes(TechnologyEnum.Ionic)) return LogoEnum.Ionic;
  if (value.includes(TechnologyEnum.Java)) return LogoEnum.Java;
  if (value.includes(TechnologyEnum.Jasmine)) return LogoEnum.Jasmine;
  if (value.includes(TechnologyEnum.Jest)) return LogoEnum.Jest;
  if (value.includes(TechnologyEnum.NGRX)) return LogoEnum.NGRX;
  if (value.includes(TechnologyEnum.NestJS)) return LogoEnum.NestJs;
  if (value.includes(TechnologyEnum.Pact)) return LogoEnum.Pact;
  if (value.includes(TechnologyEnum.Typescript)) return LogoEnum.Typescript;
  if (value.includes(TechnologyEnum.TDD)) return LogoEnum.TDD;
  if (value.includes(TechnologyEnum.RXJS)) return LogoEnum.RXJS;
  if (value.includes(TechnologyEnum.React)) return LogoEnum.React;
  if (value.includes(TechnologyEnum.SASS)) return LogoEnum.SASS;
  if (value.includes(TechnologyEnum.UI)) return LogoEnum.UI;

  // toolkit logos
  if (value.includes(ToolkitEnum.Docker)) return LogoEnum.Docker;
  if (value.includes(ToolkitEnum.Figma)) return LogoEnum.Figma;
  if (value.includes(ToolkitEnum.Github)) return LogoEnum.Github;
  if (value.includes(ToolkitEnum.Gitlab)) return LogoEnum.Gitlab;
  if (value.includes(ToolkitEnum.Illustrator)) return LogoEnum.Illustrator;
  if (value.includes(ToolkitEnum.InDesign)) return LogoEnum.InDesign;
  if (value.includes(ToolkitEnum.Inkscape)) return LogoEnum.Inkscape;
  if (value.includes(ToolkitEnum.Postman)) return LogoEnum.Postman;
  if (value.includes(ToolkitEnum.Photoshop)) return LogoEnum.Photoshop;
  if (value.includes(ToolkitEnum.XD)) return LogoEnum.XD;
  if (value.includes(ToolkitEnum.VSCode)) return LogoEnum.VSCode;

  // levels
  if (value.includes(LevelEnum.Beginner)) return LogoEnum.Beginner;
  if (value.includes(LevelEnum.Experienced)) return LogoEnum.Experienced;
  if (value.includes(LevelEnum.Intermediate)) return LogoEnum.Intermediate;

  return LogoEnum.Logo;
}

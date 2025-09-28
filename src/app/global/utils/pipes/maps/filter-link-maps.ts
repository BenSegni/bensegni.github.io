import { LinkEnum } from "../../../enum/links.enum";
import { TechnologyEnum } from "../../../enum/technology.enum";
import { ToolkitEnum } from "../../../enum/toolkit.enum";

export function getFilterLink(type: string): string {
  if (!type) return '/';

  // technology links
  if (type.includes(TechnologyEnum.Angular)) return LinkEnum.Angular;
  if (type.includes(TechnologyEnum.Cypress)) return LinkEnum.Cypress;
  if (type.includes(TechnologyEnum.Directus)) return LinkEnum.Directus;
  if (type.includes(TechnologyEnum.Express)) return LinkEnum.ExpressJs;
  if (type.includes(TechnologyEnum.HTML5)) return LinkEnum.HTML5;
  if (type.includes(TechnologyEnum.Ionic)) return LinkEnum.Ionic;
  if (type.includes(TechnologyEnum.Jasmine)) return LinkEnum.Jasmine;
  if (type.includes(TechnologyEnum.Jest)) return LinkEnum.Jest;
  if (type.includes(TechnologyEnum.NestJS)) return LinkEnum.NestJS;
  if (type.includes(TechnologyEnum.NGRX)) return LinkEnum.NGRX;
  if (type.includes(TechnologyEnum.Pact)) return LinkEnum.Pact;
  if (type.includes(TechnologyEnum.React)) return LinkEnum.React;
  if (type.includes(TechnologyEnum.RXJS)) return LinkEnum.RXJS;
  if (type.includes(TechnologyEnum.SASS)) return LinkEnum.SASS;
  if (type.includes(TechnologyEnum.Typescript)) return LinkEnum.Typescript;
  if (type.includes(TechnologyEnum.UI)) return LinkEnum.UI;

  // toolkit links
  if (type.includes(ToolkitEnum.Docker)) return LinkEnum.Docker;
  if (type.includes(ToolkitEnum.Github)) return LinkEnum.Github;
  if (type.includes(ToolkitEnum.Gitlab)) return LinkEnum.Gitlab;
  if (type.includes(ToolkitEnum.Figma)) return LinkEnum.Figma;
  if (type.includes(ToolkitEnum.Illustrator)) return LinkEnum.Illustrator;
  if (type.includes(ToolkitEnum.InDesign)) return LinkEnum.InDesign;
  if (type.includes(ToolkitEnum.Inkscape)) return LinkEnum.Inkscape;
  if (type.includes(ToolkitEnum.Photoshop)) return LinkEnum.Photoshop;
  if (type.includes(ToolkitEnum.Postman)) return LinkEnum.Postman;
  if (type.includes(ToolkitEnum.XD)) return LinkEnum.XD;
  if (type.includes(ToolkitEnum.VSCode)) return LinkEnum.VSCode;

  return '/';
}

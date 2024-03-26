import { Technology } from "../../pages/about/tech-stack/interface/technology";
import { PracticeEnum } from "../enum/practice.enum";
import { TechnologyEnum } from "../enum/technology.enum";

export const technologiesData: Technology[] = [
    {
        name: TechnologyEnum.Angular,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://angular.io/'
    },
    {
        name: TechnologyEnum.Cypress,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.Testing,
        docs: 'https://www.cypress.io/'
    },
    {
        name: TechnologyEnum.Directus,
        side: PracticeEnum.Back,
        purpose: PracticeEnum.API,
        docs: 'https://directus.io/'
    },
    {
        name: TechnologyEnum.HTML5,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
        name: TechnologyEnum.Ionic,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://ionicframework.com/'
    },
    {
        name: TechnologyEnum.Jasmine,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.Testing,
        docs: 'https://jasmine.github.io/'
    },
    {
        name: TechnologyEnum.Jest,
        side: `${PracticeEnum.Front} & ${PracticeEnum.Back}`,
        purpose: PracticeEnum.Testing,
        docs: 'https://jestjs.io/'
    },
    {
        name: TechnologyEnum.NestJS,
        side: PracticeEnum.Back,
        purpose: PracticeEnum.API,
        docs: 'https://nestjs.com/'
    },
    {
        name: TechnologyEnum.NGRX,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.State,
        docs: 'https://ngrx.io/'
    },
    {
        name: TechnologyEnum.Pact,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.Testing,
        docs: 'https://pact.io/'
    },
    {
        name: TechnologyEnum.RXJS,
        side: `${PracticeEnum.Front} & ${PracticeEnum.Back}`,
        purpose: PracticeEnum.Async,
        docs: 'https://rxjs.dev/',
    },
    {
        name: TechnologyEnum.React,
        side: `${PracticeEnum.Front}`,
        purpose: PracticeEnum.UI,
        docs: 'https://react.dev/',
    },
    {
        name: TechnologyEnum.SASS,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://sass-lang.com/'
    },
    {
        name: TechnologyEnum.Typescript,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://www.typescriptlang.org/'
    },
]
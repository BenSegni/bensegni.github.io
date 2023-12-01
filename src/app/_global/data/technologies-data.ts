import { Technology } from "../../pages/about/tech-stack/interface/technology";
import { PracticeEnum } from "../enum/practice.enum";
import { TechnologyEnum } from "../enum/technology.enum";

export const technologiesData: Technology[] = [
    {
        name: TechnologyEnum.Angular,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://angular.io/docs'
    },
    {
        name: TechnologyEnum.Cypress,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.Testing,
        docs: 'https://docs.cypress.io/guides/overview/why-cypress'
    },
    {
        name: TechnologyEnum.Directus,
        side: PracticeEnum.Back,
        purpose: PracticeEnum.API,
        docs: 'https://docs.directus.io/'
    },
    {
        name: TechnologyEnum.HTML5,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://www.w3.org/TR/2011/WD-html5-20110405/'
    },
    {
        name: TechnologyEnum.Ionic,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://ionicframework.com/docs'
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
        docs: 'https://docs.nestjs.com/'
    },
    {
        name: TechnologyEnum.NGRX,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.State,
        docs: 'https://ngrx.io/docs'
    },
    {
        name: TechnologyEnum.Pact,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.Testing,
        docs: 'https://docs.pact.io/'
    },
    {
        name: TechnologyEnum.RXJS,
        side: `${PracticeEnum.Front} & ${PracticeEnum.Back}`,
        purpose: PracticeEnum.Async,
        docs: 'https://rxjs.dev/guide/overview',
    },
    {
        name: TechnologyEnum.SASS,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://sass-lang.com/documentation/'
    },
    {
        name: TechnologyEnum.Typescript,
        side: PracticeEnum.Front,
        purpose: PracticeEnum.UI,
        docs: 'https://www.typescriptlang.org/docs/'
    },
]
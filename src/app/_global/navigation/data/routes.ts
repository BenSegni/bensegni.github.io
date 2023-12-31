import { KeywordsEnum } from "../../enum/keywords.enum";
import { NavigationEnum } from "../../enum/navigation.enum";
import { NavigationItem } from "../interface/navigation";

export const routeItems: NavigationItem[] = [
    {
        route: 'showcase',
        anchorText: NavigationEnum.Showcase,
        activeOptions: true,
        uiImage: '../../assets/img/showcase_ui_nav.webp',
        keywords: [KeywordsEnum.Design, KeywordsEnum.Development, KeywordsEnum.Portfolio, KeywordsEnum.Skills, KeywordsEnum.UI]
    },
    {
        route: 'about',
        anchorText: NavigationEnum.About,
        activeOptions: false,
        uiImage: '../../assets/img/about_ui_nav.webp',
        keywords: [KeywordsEnum.Education, KeywordsEnum.Employment, KeywordsEnum.Experience, KeywordsEnum.Skills]
    },
    {
        route: 'current-projects',
        anchorText: NavigationEnum.CurrentProject,
        activeOptions: false,
        uiImage: '../../assets/img/current_project_ui_nav.webp',
        keywords: [KeywordsEnum.Development, KeywordsEnum.Employment, KeywordsEnum.Experience, KeywordsEnum.Skills]
    },
    {
        route: 'github',
        anchorText: NavigationEnum.Github,
        activeOptions: false,
        uiImage: '../../assets/img/github_ui_nav.webp',
        keywords: [KeywordsEnum.Code, KeywordsEnum.Development, KeywordsEnum.Github, KeywordsEnum.Skills]
    },
    {
        route: 'contact',
        anchorText: NavigationEnum.Contact,
        activeOptions: false,
        uiImage: '../../assets/img/contact_ui_nav.webp',
        keywords: [KeywordsEnum.Email, KeywordsEnum.Contact, KeywordsEnum.CV]
    },

]
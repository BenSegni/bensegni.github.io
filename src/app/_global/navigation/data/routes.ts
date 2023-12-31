import { NavigationEnum } from "../../enum/navigation.enum";
import { NavigationItem } from "../interface/navigation";

export const routeItems: NavigationItem[] = [
    {
        route: 'showcase',
        anchorText: NavigationEnum.Showcase,
        activeOptions: true,
        uiImage: '../../assets/img/showcase_ui_nav.webp'
    },
    {
        route: 'about',
        anchorText: NavigationEnum.About,
        activeOptions: false,
        uiImage: '../../assets/img/about_ui_nav.webp'
    },
    {
        route: 'current-projects',
        anchorText: NavigationEnum.CurrentProject,
        activeOptions: false,
        uiImage: '../../assets/img/current_project_ui_nav.webp'
    },
    {
        route: 'github',
        anchorText: NavigationEnum.Github,
        activeOptions: false,
        uiImage: '../../assets/img/github_ui_nav.webp'
    },
    {
        route: 'contact',
        anchorText: NavigationEnum.Contact,
        activeOptions: false,
        uiImage: '../../assets/img/contact_ui_nav.webp'
    },

]
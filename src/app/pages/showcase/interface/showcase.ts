export interface Showcase {
    id: string;
    skills: string[];
    projectTitle: string;
    description: string;
    showCaseLink: string;
    background: string;
    routeUrl: string;
    details: string;
    displayImages?: ImageDisplay[];
}

export interface ImageDisplay {
    url: string;
}
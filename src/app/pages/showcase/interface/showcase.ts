export interface Showcase {
    id: string;
    skills: string[];
    projectTitle: string;
    description: string;
    showCaseLink?: string;
    downloadLink?: string;
    background: string;
    routeUrl: string;
    details: string;
    displayImages?: ImageDisplay[];
    relatedProjectId?: string;
}

export interface ImageDisplay {
    url: string;
}
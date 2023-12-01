export interface CurrentProject {
    companyLogo: string;
    title: string;
    projects: Project[];
    presentationLink: string;
}

interface Project {
    projectLogo: string;
    projectTitle: string;
    projectDescription: string;
}
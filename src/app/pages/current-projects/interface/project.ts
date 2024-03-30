import { TechUsage } from "../../../global/tech-bar-chart/interface/tech.usage";

export interface CurrentProject {
    companyLogo: string;
    title: string;
    projects: Project[];
    presentationLink: string
}

export interface Project {
    projectLogo: string;
    projectTitle: string;
    projectDescription: string;
    skills?: string[];
    skillUsage?: TechUsage[]
}
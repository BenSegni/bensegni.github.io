import { TechUsage } from "../../../../global/tech-bar-chart/interface/tech.usage";

export interface Employment {
    logo: string;
    company: string;
    date: string;
    title: string;
    successes: string[];
    technologies: string[];
    website?: string;
    skillUsage: TechUsage[];
}
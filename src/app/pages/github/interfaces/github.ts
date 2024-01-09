import { ToolTipConfig } from "../../../global/utils/directives/interfaces/tooltip";

export interface Github {
    name: string;
    githubLink: string;
    description: string;
    skills: string[];
    toolTip?: ToolTipConfig
}
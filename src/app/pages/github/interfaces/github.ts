import { ToolTipConfig } from "../../../_global/utils/directives/interfaces/tooltip";

export interface Github {
    name: string;
    githubLink: string;
    description: string;
    skills: string[];
    toolTip?: ToolTipConfig
}
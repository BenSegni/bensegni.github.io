import { ToolkitEnum } from "../enum/toolkit.enum";
import { Stack } from "../stack-list/interface/stack";

export const toolkitData: Stack[] = [
    {
        name: ToolkitEnum.Illustrator,
        purpose: ToolkitEnum.Design
    },
    {
        name: ToolkitEnum.InDesign,
        purpose: ToolkitEnum.Design
    },
    {
        name: ToolkitEnum.Photoshop,
        purpose: ToolkitEnum.Design
    },
    {
        name: ToolkitEnum.XD,
        purpose: ToolkitEnum.Design
    },
    {
        name: ToolkitEnum.Docker,
        purpose: ToolkitEnum.Development
    },
    {
        name: ToolkitEnum.Github,
        purpose: ToolkitEnum.Development
    },
    {
        name: ToolkitEnum.Gitlab,
        purpose: ToolkitEnum.Development
    },
    {
        name: ToolkitEnum.Inkscape,
        purpose: ToolkitEnum.Design
    },
    {
        name: ToolkitEnum.Postman,
        purpose: ToolkitEnum.Development
    },
    {
        name: ToolkitEnum.VSCode,
        purpose: ToolkitEnum.Development
    }
]
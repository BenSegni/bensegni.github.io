import { AnimationStyleMetadata, style } from "@angular/animations";

const borderStyle = (color: string) : AnimationStyleMetadata => style({ 'border-color': color, 'background-color': 'rgb(112, 181, 250)', 'border-width': '0.125rem',});
const start = 'rgb(112, 181, 250)';
const end = 'white' ;

export const skillsStyle: AnimationStyleMetadata[] = [
    borderStyle(start),
    borderStyle(end),
    borderStyle(start),
    borderStyle(end),
    borderStyle(start),
    borderStyle(end),
]
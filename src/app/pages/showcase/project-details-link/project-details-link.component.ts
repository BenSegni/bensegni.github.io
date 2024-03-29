import { Component, Input } from '@angular/core';
import { Showcase } from '../interface/showcase';

@Component({
  selector: 'app-project-details-link',
  templateUrl: './project-details-link.component.html'
})
export class ProjectDetailsLinkComponent {
    @Input() public project: Showcase | undefined;
}

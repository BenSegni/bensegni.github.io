import { Component, Input } from '@angular/core';
import { Showcase } from '../interface/showcase';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {
    @Input() public project: Showcase | undefined;
}

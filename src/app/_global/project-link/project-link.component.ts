import { Component, Input } from '@angular/core';
import { Showcase } from '../../pages/showcase/interface/showcase';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent {
    @Input() public project: Showcase | undefined;
    @Input () public url = '';
}

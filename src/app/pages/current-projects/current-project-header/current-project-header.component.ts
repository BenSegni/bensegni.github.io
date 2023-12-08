import { Component, Input } from '@angular/core';
import { CurrentProject } from '../interface/project';

@Component({
  selector: 'app-current-project-header',
  templateUrl: './current-project-header.component.html',
  styleUrls: ['./current-project-header.component.scss']
})
export class CurrentProjectHeaderComponent {
    @Input() public currentProject: CurrentProject | undefined;
}

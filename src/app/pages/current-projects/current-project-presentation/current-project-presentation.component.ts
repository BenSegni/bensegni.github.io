import { Component, Input } from '@angular/core';
import { CurrentProject } from '../interface/project';

@Component({
  selector: 'app-current-project-presentation',
  templateUrl: './current-project-presentation.component.html',
  styleUrls: ['./current-project-presentation.component.scss']
})
export class CurrentProjectPresentationComponent {
    @Input() public currentProject: CurrentProject | undefined;
}

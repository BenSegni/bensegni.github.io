import { Component, Input } from '@angular/core';
import { Project } from '../interface/project';

@Component({
  selector: 'app-current-project-detail',
  templateUrl: './current-project-detail.component.html',
  styleUrls: ['./current-project-detail.component.scss']
})
export class CurrentProjectDetailComponent {
    @Input() public project: Project | undefined;
}

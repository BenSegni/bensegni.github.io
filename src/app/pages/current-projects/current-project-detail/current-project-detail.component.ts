import { Component, input } from '@angular/core';

import { Project } from '../interface/project';
import { projectData } from './../../../global/data/project-data';

@Component({
  selector: 'app-current-project-detail',
  templateUrl: './current-project-detail.component.html',
  styleUrls: ['./current-project-detail.component.scss']
})
export class CurrentProjectDetailComponent {
    public project = input<Project>(projectData.projects[0]) ;
}

import { Component } from '@angular/core';
import { GlobalDataService } from '../../_global/global-data.service';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.scss']
})
export class CurrentProjectsComponent extends GlobalDataService {}

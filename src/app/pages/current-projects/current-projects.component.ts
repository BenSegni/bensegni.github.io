import { Component } from '@angular/core';
import { GlobalDataService } from '../../global/global-data.service';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html'
})
export class CurrentProjectsComponent extends GlobalDataService {}

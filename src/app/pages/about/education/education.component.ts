import { Component } from '@angular/core';
import { GlobalDataService } from '../../../_global/global-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent extends GlobalDataService {}

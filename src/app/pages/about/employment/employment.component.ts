import { Component } from '@angular/core';
import { GlobalDataService } from '../../../_global/global-data.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent extends GlobalDataService {}

import { Component } from '@angular/core';
import { GlobalDataService } from '../../../_global/global-data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent extends GlobalDataService {}

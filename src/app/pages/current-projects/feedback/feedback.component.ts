import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    standalone: false
})
export class FeedbackComponent extends GlobalDataService {}

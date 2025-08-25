import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    standalone: false
})
export class EducationComponent extends GlobalDataService {}

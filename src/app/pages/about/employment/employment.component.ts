import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
    selector: 'app-employment',
    templateUrl: './employment.component.html',
    standalone: false
})
export class EmploymentComponent extends GlobalDataService {}

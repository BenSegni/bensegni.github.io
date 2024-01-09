import { Component } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
    selector: 'app-previous-companies',
    templateUrl: './previous-companies.component.html',
    styleUrls: ['./previous-companies.component.scss']
})
export class PreviousCompaniesComponent extends GlobalDataService {}

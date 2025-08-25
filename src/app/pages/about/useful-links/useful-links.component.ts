import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
    selector: 'app-useful-links',
    templateUrl: './useful-links.component.html',
    standalone: false
})
export class UsefulLinksComponent extends GlobalDataService {

}

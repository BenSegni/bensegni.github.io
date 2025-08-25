import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/global/global-data.service';

@Component({
    selector: 'app-npm',
    templateUrl: './npm.component.html',
    standalone: false
})
export class NpmComponent extends GlobalDataService {

}

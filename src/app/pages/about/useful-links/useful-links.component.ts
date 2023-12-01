import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/_global/global-data.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent extends GlobalDataService {

}

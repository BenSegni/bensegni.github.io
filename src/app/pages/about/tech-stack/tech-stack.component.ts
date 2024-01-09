import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent extends GlobalDataService {

}

import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})
export class ToolkitComponent extends GlobalDataService {

}

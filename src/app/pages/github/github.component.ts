import { Component } from '@angular/core';
import { GlobalDataService } from '../../_global/global-data.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent extends GlobalDataService {

}

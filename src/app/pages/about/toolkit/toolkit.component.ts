import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';
import { StackConfig } from '../../../global/stack-list/interface/stack';

@Component({
    selector: 'app-toolkit',
    templateUrl: './toolkit.component.html',
    standalone: false
})
export class ToolkitComponent extends GlobalDataService {
  public stackConfig: StackConfig = {
    title: 'ToolKit',
    data$: this.toolkit$
  }
}

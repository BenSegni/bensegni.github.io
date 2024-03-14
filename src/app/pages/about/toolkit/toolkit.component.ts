import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';
import { StackConfig } from '../../../global/stack-list/interface/stack';
import { ToolKit } from './interface/toolkit';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html'
})
export class ToolkitComponent extends GlobalDataService {
  public stackConfig: StackConfig<ToolKit> = {
    title: 'ToolKit',
    data$: this.toolkit$
  }
}

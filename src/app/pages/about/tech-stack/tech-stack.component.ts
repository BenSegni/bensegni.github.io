import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';
import { StackConfig } from '../../../global/stack-list/interface/stack';

@Component({
    selector: 'app-tech-stack',
    templateUrl: './tech-stack.component.html',
    standalone: false
})
export class TechStackComponent extends GlobalDataService {
  public stackConfig: StackConfig = {
    title: 'Technologies',
    data$: this.technologies$
  }
}

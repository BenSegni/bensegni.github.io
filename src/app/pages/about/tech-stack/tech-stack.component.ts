import { Component } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';
import { Technology } from './interface/technology';
import { StackConfig } from '../../../global/stack-list/interface/stack';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html'
})
export class TechStackComponent extends GlobalDataService {
  public stackConfig: StackConfig<Technology> = {
    title: 'Technologies',
    data$: this.technologies$
  }
}

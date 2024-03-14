import { Component, Input } from '@angular/core';
import { StackConfig } from './interface/stack';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html'
})
export class StackListComponent {
  @Input() config: StackConfig<any> | undefined;
}

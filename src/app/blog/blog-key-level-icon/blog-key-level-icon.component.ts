import { Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-blog-key-level-icon',
    templateUrl: './blog-key-level-icon.component.html',
    styleUrls: ['./blog-key-level-icon.component.scss'],
    standalone: false
})
export class BlogKeyLevelIconComponent {
  public level:InputSignal<string> = input<string>('');
  public isInternal:InputSignal<boolean> = input<boolean>(false);
}

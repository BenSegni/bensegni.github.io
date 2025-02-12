import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-key-level-icon',
  templateUrl: './blog-key-level-icon.component.html',
  styleUrls: ['./blog-key-level-icon.component.scss']
})
export class BlogKeyLevelIconComponent {
  public level = input<string>('');
  public isInternal = input<boolean>(false);
}

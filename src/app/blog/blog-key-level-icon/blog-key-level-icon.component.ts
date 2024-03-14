import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-key-level-icon',
  templateUrl: './blog-key-level-icon.component.html',
  styleUrls: ['./blog-key-level-icon.component.scss']
})
export class BlogKeyLevelIconComponent {
  @Input() public level = '';
  @Input() public isInternal = false;
}

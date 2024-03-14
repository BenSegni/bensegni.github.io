import { Component, Input } from '@angular/core';
import { Blog } from '../interface/blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() public post: Blog | undefined;
  @Input() public blogMini = false;

  public constructor() { }
}

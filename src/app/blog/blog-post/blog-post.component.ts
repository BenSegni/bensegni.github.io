import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../interface/blog';
import { GlobalDataService } from '../../global/global-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() public post: Blog | undefined;
  @Input() public blogMini = false;

  public constructor(public _globalService: GlobalDataService) {}

  public ngOnInit(): void {
    this._globalService.onLoad();
  }
}

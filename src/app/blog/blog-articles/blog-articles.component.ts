import { Component, InputSignal, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

import { Blog } from '../interface/blog';
import { GlobalDataService } from '../../global/global-data.service';

@Component({
    selector: 'app-blog-articles',
    templateUrl: './blog-articles.component.html',
    standalone: false
})
export class BlogArticlesComponent implements OnInit, OnChanges {
  public blog$: Blog[] = [];
  public articleId: InputSignal<number> = input<number>(0);

  public constructor(private _globalService: GlobalDataService) {}

  public ngOnInit(): void {
    this.blog$ = this.assignBlogList();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.blog$ = this.assignBlogList();
    }
  }

  private assignBlogList(): Blog[] {
    return this._globalService.blog$().filter((article) => article.id !== this.articleId());
  }
}

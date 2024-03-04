import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, WritableSignal } from '@angular/core';
import { GlobalDataService } from '../../global/global-data.service';
import { Blog } from '../interface/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html'
})
export class BlogArticlesComponent implements OnInit, OnChanges {
  public blog$: Blog[] = [];
  @Input() public articleId: number | undefined;

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
    return this._globalService.blog$().filter((article) => article.id !== this.articleId);
  }
}

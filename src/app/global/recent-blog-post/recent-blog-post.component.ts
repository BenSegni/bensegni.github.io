import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Blog } from 'src/app/blog/interface/blog';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { blogData } from '../data/blog-data';

@Component({
  selector: 'app-recent-blog-post',
  templateUrl: './recent-blog-post.component.html',
  styleUrls: ['./recent-blog-post.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RecentBlogPostComponent implements OnInit, OnDestroy {
  public recentBlogArticle: Blog = blogData.reduce((a, b) => (a.date > b.date ? a : b));
  public articleUrl = `blog/${this.recentBlogArticle.routeUrl}`;
  public show = true;
  private destroy$ = new Subject();
  public constructor(private _route: ActivatedRoute, private _router: Router) { }

  public ngOnInit(): void {
    this._route.queryParams.subscribe((param: Params) => {
      if (param['recentArticle']) {
        this.show = false;
      } else {
        this.show = true;
      }
    });

    this._router.events.subscribe(() => {
      if(this._router.routerState.snapshot.url.includes(this.recentBlogArticle.routeUrl)) {
        this.show = false;
      } else {
        this.show = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

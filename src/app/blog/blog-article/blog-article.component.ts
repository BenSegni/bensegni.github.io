import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlobalDataService } from '../../global/global-data.service';
import { Blog } from '../interface/blog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged, take, tap } from 'rxjs';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html'
})
export class BlogArticleComponent implements OnInit {
  public article: Blog | undefined;
  public blogIcon = '../../../assets/img/blog_icon.svg';
  public content = '';
  public urlIsCopied = false;
  public shareIcon = '../../../assets/img/share_icon.svg'
  public constructor(
    private _globalService: GlobalDataService,
    private _router: Router,
    private _http: HttpClient
  ) { }

  public ngOnInit(): void {
    let prevUrl = ''
    this._router.events.pipe(
      distinctUntilChanged(() => this._router.url === prevUrl),
      tap(() => prevUrl = this._router.url)
    ).subscribe(() => {
      this.assignBlogArticle(this._router.url);
    });
  }

  private assignBlogArticle(pageUrl: string): void {
    this.article = this._globalService.blog$().find((article) => pageUrl.includes(article.routeUrl));
    this.getContent();
  }

  private getContent(): void {
    if (this.article) {
      this._http.get(this.article.content, { responseType: "text" }).pipe(take(1)).subscribe(content => {
        this.content = content;
      });
    }
  }

  public copyURL(): void {
    this.urlIsCopied = true;
    navigator.clipboard.writeText(`https://bensegni.github.io${this._router.url}`).then().catch(error => console.log(error));
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../global/global-data.service';
import { Blog } from '../interface/blog';
import { Router } from '@angular/router';
import { distinctUntilChanged, tap } from 'rxjs';
import { ToolTipConfig } from '../../global/utils/directives/interfaces/tooltip';
import { BlogService } from '../services/blog.service';
declare let process: any;
const env = process.env.NODE_ENV;
@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html'
})
export class BlogArticleComponent implements OnInit {
  public article: Blog | undefined;
  public averageReadingTime = 0;
  public minuteOrMinutes = '';
  public blogIcon = '../../../assets/img/blog_icon.svg';
  public content = '';
  public urlIsCopied = false;
  public shareIcon = '../../../assets/img/share_icon.svg';
  public toolTip: ToolTipConfig = {
    toolTipTitle: 'Copy & Share',
    text: 'Click the button to easily copy the page address to your clipboard. Then, you can share the link wherever you like.'
  }
  public readTimeToolTip: ToolTipConfig = {
    toolTipTitle: 'Read Time Evaluation',
    text: 'Using the Medium model, this offers an estimate of how long it takes to read this article.',
    linkText: 'Read About it Here',
    link: 'https://blog.medium.com/read-time-and-you-bc2048ab620c'
  }

  public constructor(
    private _globalService: GlobalDataService,
    private _router: Router,
    private _blogService: BlogService
  ) { }

  public ngOnInit(): void {
    let prevUrl = '';

    this._router.events.pipe(
      distinctUntilChanged(() => this._router.url === prevUrl),
      tap(() => prevUrl = this._router.url)
    ).subscribe(() => {
        this.urlIsCopied = false;
        this.assignBlogArticle(this._router.url);
    });

    this.assignBlogArticle(this._router.url);
  }

  private assignBlogArticle(pageUrl: string): void {
    this.article = this._globalService.blog$().find((article) => pageUrl.includes(article.routeUrl));
    this.getContent();
  }

  private getContent(): void {
    if (this.article) {
      this._blogService.assignBlogContent(this.article).subscribe(content => {
        this.content = content;
        this.convertHTMLToReadingTime(this.content.split(' ').length);
      });
    }
  }

  public copyURL(): void {
    const production = 'https://bensegni.github.io';
    const local = 'http://localhost:4200'

    let url = this._router.url;

    if(url.includes('?')){
      url = url.split("?")[0]
    }

    navigator
      .clipboard
      .writeText(`${env === 'production' ? production : local}${url}`)
      .then(() => this.urlIsCopied = true).
      catch(error => console.log(error));
  }

  private convertHTMLToReadingTime(wordCount: number): void {
    this.averageReadingTime = this._blogService.setCountToAverageWPM(wordCount);
    this.minuteOrMinutes = this._blogService.isItMinutesOrMinute(this.averageReadingTime);
  }
}

import {
  Component,
  InputSignal,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  input,
} from "@angular/core";

import { Blog } from "../interface/blog";
import { GlobalDataService } from "../../global/global-data.service";
import { BlogPostComponent } from "../blog-post/blog-post.component";

@Component({
  selector: "app-blog-articles",
  templateUrl: "./blog-articles.component.html",
  standalone: true,
  imports: [BlogPostComponent],
})
export class BlogArticlesComponent implements OnInit, OnChanges {
  public blog$: Blog[] = [];
  public articleId: InputSignal<number> = input<number>(0);
  private _globalService: GlobalDataService = inject(GlobalDataService);


  public ngOnInit(): void {
    this.blog$ = this.assignBlogList();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.blog$ = this.assignBlogList();
    }
  }

  private assignBlogList(): Blog[] {
    return this._globalService
      .blog$()
      .filter((article) => article.id !== this.articleId());
  }
}

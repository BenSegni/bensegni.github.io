import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Blog } from "../interface/blog";
import { Observable, take } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private _http: HttpClient = inject(HttpClient);

  public assignBlogContent(article: Blog): Observable<string> {
    return this._http
      .get(article.content, { responseType: "text" })
      .pipe(take(1));
  }

  public isItMinutesOrMinute(averageReadingTime: number): string {
    return averageReadingTime > 1 ? "minutes" : "minute";
  }

  public setCountToAverageWPM(wordCount: number): number {
    return Math.floor(wordCount / 275);
  }
}

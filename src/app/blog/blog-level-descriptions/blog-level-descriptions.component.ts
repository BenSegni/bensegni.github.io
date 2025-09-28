import { AfterViewChecked, Component, inject, OnInit } from "@angular/core";

import { ActivatedRoute, RouterLink } from "@angular/router";
import { BlogDescription } from "../interface/blog.description";
import { blogDescriptionData } from "../../data/blog-description-data";
import { AltTextPipe } from "../../global/utils/pipes/alt-text/alt-text.pipe";
import { AnchorPipe } from "../utils/anchor.pipe";
import { BlogKeyLevelIconComponent } from "../blog-key-level-icon/blog-key-level-icon.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-blog-level-descriptions",
  templateUrl: "./blog-level-descriptions.component.html",
  styleUrls: ["./blog-level-descriptions.component.scss"],
  standalone: true,
  imports: [AltTextPipe, AnchorPipe, BlogKeyLevelIconComponent, CommonModule, RouterLink],
})
export class BlogLevelDescriptionsComponent
  implements OnInit, AfterViewChecked
{
  private tag: string | null = "";
  public blogIcon = "../../../assets/img/blog_icon.svg";
  public blogDescriptionData: BlogDescription[] = blogDescriptionData;

  private _route: ActivatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this._route.fragment.subscribe((fragment) => (this.tag = fragment));
  }

  public ngAfterViewChecked(): void {
    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
    };

    try {
      document.querySelector(`#${this.tag}`)?.scrollIntoView(options);
    } catch (error) {
      console.log(error);
    }
  }
}

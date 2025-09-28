import { Component } from "@angular/core";
import { GlobalDataService } from "../../global/global-data.service";
import { blogData } from "../../data/blog-data";
import { TechnologyEnum } from "../../global/enum/technology.enum";
import { Blog } from "../interface/blog";
import { FilterConfig } from "../../global/shared-filter/interface/filter.config";
import { FadeInButton } from "../../global/utils/animations/fade.animation";
import { SharedFilterComponent } from "../../global/shared-filter/shared-filter.component";
import { BlogKeyComponent } from "../blog-key/blog-key.component";
import { BlogPostComponent } from "../blog-post/blog-post.component";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  animations: [FadeInButton()],
  standalone: true,
  imports: [SharedFilterComponent, BlogKeyComponent, BlogPostComponent],
})
export class BlogComponent extends GlobalDataService {
  public filterConfig: FilterConfig<Blog> = {
    data: blogData,
    listLength: blogData.length,
    signalData: this.blog$,
    options: [
      TechnologyEnum.Angular,
      TechnologyEnum.HTML5,
      TechnologyEnum.SASS,
      TechnologyEnum.Typescript,
    ],
    resetValue: TechnologyEnum.HTML5,
  };
}

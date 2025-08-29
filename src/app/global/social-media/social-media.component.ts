import { Component } from "@angular/core";
import { LinkedinIconComponent } from "../icons/linkedin-icon/linkedin-icon.component";
import { NpmIconComponent } from "../icons/npm-icon/npm-icon.component";
import { GithubIconComponent } from "../icons/github-icon/github-icon.component";
import { BehanceIconComponent } from "../icons/behance-icon/behance-icon.component";
import { RecentBlogPostComponent } from "../recent-blog-post/recent-blog-post.component";

@Component({
  selector: "app-social-media",
  templateUrl: "./social-media.component.html",
  imports: [
    LinkedinIconComponent,
    NpmIconComponent,
    GithubIconComponent,
    BehanceIconComponent,
    RecentBlogPostComponent,
  ],
})
export class SocialMediaComponent {}

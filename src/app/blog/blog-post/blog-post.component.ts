import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { Blog } from "../interface/blog";
import { blogData } from "../../data/blog-data";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LogoPipe } from "../../global/utils/pipes/logo/logo.pipe";
import { AltTextPipe } from "../../global/utils/pipes/alt-text/alt-text.pipe";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    LogoPipe,
    AltTextPipe,
    SkillPillsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent {
  public post: InputSignal<Blog> = input<Blog>(blogData[0]);
  public blogMini: InputSignal<boolean> = input<boolean>(false);
}

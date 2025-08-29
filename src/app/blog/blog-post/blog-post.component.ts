import { Component, input, InputSignal } from "@angular/core";

import { Blog } from "../interface/blog";
import { blogData } from "../../global/data/blog-data";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LogoPipe } from "src/app/global/utils/pipes/logo.pipe";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";
import { SkillPillsComponent } from "src/app/global/skill-pills/skill-pills.component";

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
})
export class BlogPostComponent {
  public post: InputSignal<Blog> = input<Blog>(blogData[0]);
  public blogMini: InputSignal<boolean> = input<boolean>(false);
}

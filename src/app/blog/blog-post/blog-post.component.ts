import { Component, Input, input } from "@angular/core";

import { Blog } from "../interface/blog";
import { blogData } from "../../global/data/blog-data";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
})
export class BlogPostComponent {
  public post = input<Blog>(blogData[0]);
  public blogMini = input<boolean>(false);
}

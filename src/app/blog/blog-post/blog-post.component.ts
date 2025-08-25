import { Component, input, InputSignal } from "@angular/core";

import { Blog } from "../interface/blog";
import { blogData } from "../../global/data/blog-data";

@Component({
    selector: "app-blog-post",
    templateUrl: "./blog-post.component.html",
    styleUrls: ["./blog-post.component.scss"],
    standalone: false
})
export class BlogPostComponent {
  public post: InputSignal<Blog> = input<Blog>(blogData[0]);
  public blogMini: InputSignal<boolean> = input<boolean>(false);
}

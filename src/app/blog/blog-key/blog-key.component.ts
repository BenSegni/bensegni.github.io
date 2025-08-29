import { Component } from "@angular/core";
import { LevelEnum } from "../enum/level.enum";
import { BlogKeyLevelIconComponent } from "../blog-key-level-icon/blog-key-level-icon.component";

@Component({
  selector: "app-blog-key",
  templateUrl: "./blog-key.component.html",
  styleUrls: ["./blog-key.component.scss"],
  standalone: true,
  imports: [BlogKeyLevelIconComponent],
})
export class BlogKeyComponent {
  public blogLevels: string[] = this.assignBlogLevels();

  public get levels(): typeof LevelEnum {
    return LevelEnum;
  }

  private assignBlogLevels(): string[] {
    return [
      this.levels.Beginner,
      this.levels.Intermediate,
      this.levels.Experienced,
    ];
  }
}

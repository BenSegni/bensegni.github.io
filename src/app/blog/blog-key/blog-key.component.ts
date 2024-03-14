import { Component } from '@angular/core';
import { LevelEnum } from '../enum/level.enum';

@Component({
  selector: 'app-blog-key',
  templateUrl: './blog-key.component.html',
  styleUrls: ['./blog-key.component.scss']
})
export class BlogKeyComponent {
  public blogLevels: string[] = this.assignBlogLevels();

  public get levels(): typeof LevelEnum {
    return LevelEnum;
  };

  private assignBlogLevels(): string[] {
    return [
      this.levels.Beginner,
      this.levels.Intermediate,
      this.levels.Experienced
    ]
  }
}

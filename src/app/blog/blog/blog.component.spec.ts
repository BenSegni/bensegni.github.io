import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../../global/utils/pipes/alt-text/alt-text.pipe";
import { BlogComponent } from "./blog.component";
import { BlogKeyComponent } from "../blog-key/blog-key.component";
import { BlogKeyLevelIconComponent } from "../blog-key-level-icon/blog-key-level-icon.component";
import { BlogPostComponent } from "../blog-post/blog-post.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterLinkPipe } from "../../global/utils/pipes/filter-link/filter-link.pipe";
import { FilterPipe } from "../../global/utils/pipes/filter/filter.pipe";
import { LogoPipe } from "../../global/utils/pipes/logo/logo.pipe";
import { PillPipe } from "../../global/utils/pipes/pill/pill.pipe";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedFilterComponent } from "../../global/shared-filter/shared-filter.component";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";

describe("BlogComponent", () => {
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogComponent,
        SharedFilterComponent,
        BlogKeyComponent,
        BlogPostComponent,
        LogoPipe,
        AltTextPipe,
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        BlogKeyLevelIconComponent,
        FilterLinkPipe,
      ],
      imports: [RouterTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
  });

  describe("Testing UI Display Values", () => {
    it("should display the title of blog", () => {
      const title = fixture.nativeElement.querySelector("h3");

      expect(title.innerText).toBe("Blog");
    });
  });
});

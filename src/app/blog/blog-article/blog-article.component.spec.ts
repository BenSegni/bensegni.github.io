import { ActivatedRoute, RouterLink } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

import { AltTextPipe } from "../../global/utils/pipes/alt-text.pipe";
import { BlogArticleComponent } from "./blog-article.component";
import { BlogArticlesComponent } from "../blog-articles/blog-articles.component";
import { BlogContactDetailsComponent } from "../blog-contact-details/blog-contact-details.component";
import { BlogPostComponent } from "../blog-post/blog-post.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClockIconComponent } from "../../global/icons/clock-icon/clock-icon.component";
import { FilterPipe } from "../../global/utils/pipes/filter.pipe";
import { InfoDirective } from "../../global/utils/directives/info.directive";
import { LinkedinIconComponent } from "../../global/icons/linkedin-icon/linkedin-icon.component";
import { LogoPipe } from "../../global/utils/pipes/logo.pipe";
import { PillPipe } from "../../global/utils/pipes/pill.pipe";
import { SafeResourcePipe } from "./../utils/safe-resource.pipe";
import { ShareIconComponent } from "../../global/icons/share-icon/share-icon.component";
import { ShareIconsComponent } from "../../global/share-icons/share-icons.component";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";
import { blogData } from "../../global/data/blog-data";
import { of } from "rxjs";
import { provideHttpClientTesting } from "@angular/common/http/testing";

const fakeActivatedRoute = {
  fragment: of({}),
} as ActivatedRoute;

describe("BlogArticleComponent", () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareIconsComponent, BrowserAnimationsModule, RouterLink],
      declarations: [
        BlogArticleComponent,
        AltTextPipe,
        LogoPipe,
        ClockIconComponent,
        ShareIconComponent,
        SkillPillsComponent,
        SafeResourcePipe,
        BlogContactDetailsComponent,
        BlogArticlesComponent,
        LinkedinIconComponent,
        InfoDirective,
        PillPipe,
        FilterPipe,
        BlogPostComponent,
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    });
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing getContent()", () => {
    it("should return the correct article", () => {
      component.article = blogData[1];
      const spyService = spyOn(
        component["_blogService"],
        "assignBlogContent"
      ).and.returnValue(of("../../../assets/blog-content/sass-params.html"));

      component["getContent"]();

      expect(spyService).toHaveBeenCalled();
    });
  });

  describe("copyURL()", () => {
    it("should copy the url to clipboard", () => {
      const spyNavigator = spyOn(
        navigator.clipboard,
        "writeText"
      ).and.resolveTo();

      component.copyURL();

      expect(spyNavigator).toHaveBeenCalledWith("http://localhost:4200/");
    });
  });

  describe("Testing UI Display Values", () => {
    it("should display the title of the article", () => {
      component.article = blogData[1];
      fixture.detectChanges();

      const title = fixture.nativeElement.querySelector("h3");

      expect(title.innerText).toBe("SASS with Parameters");
    });
  });
});

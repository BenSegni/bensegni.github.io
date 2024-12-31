import { ActivatedRoute, RouterLink, convertToParamMap, provideRouter } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../../global/utils/pipes/alt-text.pipe";
import { BlogPostComponent } from "./blog-post.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterLinkPipe } from "../../global/utils/pipes/filter-link.pipe";
import { FilterPipe } from "../../global/utils/pipes/filter.pipe";
import { LogoPipe } from "../../global/utils/pipes/logo.pipe";
import { PillPipe } from "../../global/utils/pipes/pill.pipe";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";
import { of } from "rxjs";

describe("BlogPostComponent", () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterLink, BrowserAnimationsModule],
      declarations: [
        BlogPostComponent,
        LogoPipe,
        AltTextPipe,
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        FilterLinkPipe
      ],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({})),
            queryParamMap: of(convertToParamMap({})),
            snapshot: {
              paramMap: convertToParamMap({}),
              queryParamMap: convertToParamMap({})
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

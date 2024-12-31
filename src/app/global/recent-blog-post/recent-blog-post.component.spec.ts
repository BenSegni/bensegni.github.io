import { ActivatedRoute, Params, Router } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Subject, of } from "rxjs";

import { RecentBlogPostComponent } from "./recent-blog-post.component";
import { blogData } from "src/app/global/data/blog-data";

const fakeActivatedRoute = {
  queryParams: of({
    recentArticle: "true",
  }),
} as unknown as ActivatedRoute;

describe("RecentBlogPostComponent", () => {
  let component: RecentBlogPostComponent;
  let fixture: ComponentFixture<RecentBlogPostComponent>;
  let mockActivatedRoute: { queryParams: Subject<Params> };
  let mockRouter: {
    events: Subject<any>;
    routerState: { snapshot: { url: string } };
    createUrlTree: () => {};
    serializeUrl: () => "";
  };

  beforeEach(() => {
    mockActivatedRoute = {
      queryParams: new Subject<Params>(),
    };

    mockRouter = {
      events: new Subject<any>(),
      routerState: {
        snapshot: { url: "" },
      },
      createUrlTree: () => ({}),
      serializeUrl: () => "",
    };

    TestBed.configureTestingModule({
      imports: [RecentBlogPostComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        { provide: Router, useValue: mockRouter },
      ],
    });
    fixture = TestBed.createComponent(RecentBlogPostComponent);
    component = fixture.componentInstance;
    component.recentBlogArticle = blogData[0];
    fixture.detectChanges();
  });

  describe("Testing Router Events", () => {
    it("should hide component when event param recentArticle is present", () => {
      mockRouter.routerState.snapshot.url = blogData[0].routeUrl;
      fixture.detectChanges();
      mockRouter.events.next({});

      expect(component.show).toBeFalse();
    });

    it("should show component when event param recentArticle is not present", () => {
      mockRouter.routerState.snapshot.url = "test";
      fixture.detectChanges();
      mockRouter.events.next({});

      expect(component.show).toBeTrue();
    });
  });

  describe("Testing Router Query Params", () => {
    it("should hide component when event query recentArticle is present", () => {
      component.ngOnInit();
      mockActivatedRoute.queryParams.next({ recentArticle: "true" });
      fixture.detectChanges();

      expect(component.show).toBeFalse();
    });
  });
});

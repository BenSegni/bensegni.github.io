import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

import { BlogService } from "./blog.service";
import { TestBed } from "@angular/core/testing";
import { blogData } from "src/app/global/data/blog-data";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe("BlogService", () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(BlogService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("Testing assignBlogContent()", () => {
    it("should return a string observable when called", () => {
      spyOn(service["_http"], "get").and.callThrough(); 

      service.assignBlogContent(blogData[0]).subscribe((res) => {
        expect(res).toEqual("");
      });

      expect(service["_http"].get).toHaveBeenCalled();
    });
  });
});

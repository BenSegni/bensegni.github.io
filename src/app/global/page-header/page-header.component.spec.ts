import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../utils/pipes/alt-text.pipe";
import { By } from "@angular/platform-browser";
import { LocationIconComponent } from "../icons/location-icon/location-icon.component";
import { LogoPipe } from "../utils/pipes/logo.pipe";
import { PageHeaderComponent } from "./page-header.component";

describe("PageHeaderComponent", () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent,
        LocationIconComponent,
        LogoPipe,
        AltTextPipe,
      ],
    });
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing UI Display Values", () => {
    it("should display the text content in the page header", () => {
      const mainTitle = fixture.nativeElement.querySelector("h1");
      const subTitle = fixture.nativeElement.querySelector("h2");
      const locationLink = fixture.debugElement.query(By.css("#location-link"));
      const location = fixture.debugElement.query(By.css("#location"));

      expect(mainTitle.innerText).toBe("Hi, I'm Ben Segni.");
      expect(subTitle.innerText).toBe("- A Frontend full-stack developer.");
      expect(locationLink.nativeElement.href).toBe(
        "https://maps.app.goo.gl/X1s9Tfpd2ZJWqGSN7"
      );
      expect(location.nativeElement.innerText).toBe(
        "County Durham, United Kingdom."
      );
    });
  });
});

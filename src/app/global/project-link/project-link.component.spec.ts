import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BehanceIconComponent } from "../icons/behance-icon/behance-icon.component";
import { MediumIconComponent } from "../icons/medium-icon/medium-icon.component";
import { PdfIconComponent } from "../icons/pdf-icon/pdf-icon.component";
import { ProjectLinkComponent } from "./project-link.component";
import { showcaseData } from "../data/showcase-data";

describe("ProjectLinkComponent", () => {
  let component: ProjectLinkComponent;
  let fixture: ComponentFixture<ProjectLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectLinkComponent,
        BehanceIconComponent,
        PdfIconComponent,
        MediumIconComponent,
      ],
    });
    fixture = TestBed.createComponent(ProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing icon and link creation", () => {
    it("should set link to medium icon and link", () => {
      fixture.componentRef.setInput("project", showcaseData[7]);

      fixture.detectChanges();

      expect(component.isMedium).toBeTruthy();
      expect(component.medium).toBeTruthy();
    });
    it("should set link to pdf icon and link", () => {
      fixture.componentRef.setInput("project", showcaseData[8]);

      fixture.detectChanges();

      expect(component.isMedium).toBeFalsy();
      expect(component.pdf).toBeTruthy();
      expect(component.link).toBe("../../../../assets/docs/qatar_brochure.pdf");
    });
    it("should set link to behance icon and link", () => {
      fixture.componentRef.setInput("project", showcaseData[1]);

      fixture.detectChanges();

      expect(component.isMedium).toBeFalsy();
      expect(component.behance).toBeTruthy();
      expect(component.link).toBe(
        "https://www.behance.net/gallery/63637443/A-Recent-Wordpress-Design-Project"
      );
    });
    it("should set link to behance icon and link by default", () => {
      fixture.componentRef.setInput("project", {
        ...showcaseData[1],
        showCaseLink: "",
        downLoadLink: "",
      });

      fixture.detectChanges();

      expect(component.isMedium).toBeFalsy();
      expect(component.behance).toBeTruthy();
      expect(component.link).toBe("");
    });
    it("should set a url if given to the component", () => {
      fixture.componentRef.setInput("url", 'https://bbc.com');

      fixture.detectChanges();

      expect(component.isMedium).toBeFalsy();
      expect(component.behance).toBeTruthy();
      expect(component.link).toBe("https://bbc.com");
    });
  });
});

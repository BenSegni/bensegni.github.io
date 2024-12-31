import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../../../global/utils/pipes/alt-text.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterPipe } from "../../../global/utils/pipes/filter.pipe";
import { LogoPipe } from "../../../global/utils/pipes/logo.pipe";
import { PillPipe } from "../../../global/utils/pipes/pill.pipe";
import { RelatedSynopsisComponent } from "./related-synopsis.component";
import { Showcase } from "../../showcase/interface/showcase";
import { SkillPillsComponent } from "../../../global/skill-pills/skill-pills.component";
import { of } from "rxjs";
import { showcaseData } from "../../../global/data/showcase-data";

const fakeActivatedRoute = {
  fragment: of({}),
} as ActivatedRoute;

describe("RelatedSynopsisComponent", () => {
  let component: RelatedSynopsisComponent;
  let fixture: ComponentFixture<RelatedSynopsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterLink, BrowserAnimationsModule],
      declarations: [
        RelatedSynopsisComponent,
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        LogoPipe,
        AltTextPipe
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    });
    fixture = TestBed.createComponent(RelatedSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing navigateToSynopsis()", () => {
    it("should navigate to the identified project", () => {
      const routerstub: Router = TestBed.inject(Router);
      const spyRouter = spyOn(routerstub, "navigate");
      const spyFind = spyOn<any>(component, "findRelatedProject");
      const project = component["_globalService"]
        .showcaseSignal$()
        .find((project) => (project.id = "1"));

      component.navigateToSynopsis(project as Showcase);

      expect(spyRouter).toHaveBeenCalled();
      expect(spyFind).toHaveBeenCalled();
    });
  });

  describe("Testing findRelatedProject()", () => {
    it("should display a related project", () => {
      const data: Showcase[] = showcaseData;

      spyOn(component["_globalService"], "showcaseSignal$").and.returnValue(
        data
      );

      fixture.componentRef.setInput('showcaseProject', data[1]);
      component.ngOnChanges();
      fixture.detectChanges();

      component.relatedProject = data.find(
        (project) => project.id === component.showcaseProject().relatedProjectId
      );

      expect(component.relatedProject?.projectTitle).toBe(data[0].projectTitle);
    });
  });
});

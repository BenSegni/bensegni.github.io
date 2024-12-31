import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectDetailsLinkComponent } from "./project-details-link/project-details-link.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedFilterComponent } from "../../global/shared-filter/shared-filter.component";
import { ShowcaseComponent } from "./showcase.component";
import { ShowcaseItemsComponent } from "./showcase-items/showcase-items.component";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";
import { UtilsModule } from "../../global/utils/utils.module";

describe("ShowcaseComponent", () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [
        ShowcaseComponent,
        ProjectDetailsComponent,
        ShowcaseItemsComponent,
        SkillPillsComponent,
        SharedFilterComponent,
        ProjectDetailsLinkComponent,
      ],
    });
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing changeViewLayout()", () => {
    beforeEach(() => {
      component.columnLayout = false;
    });

    it("should toggle the layout from grid to column", () => {
      component.changeViewLayout(true);

      expect(component.columnLayout).toBeTruthy();
    });
  });

  describe("Testing UI Display Values", () => {
    it("should display the title of the page", () => {
      const title = fixture.nativeElement.querySelector("h3");

      expect(title.innerText).toBe("Showcase");
    });
  });
});

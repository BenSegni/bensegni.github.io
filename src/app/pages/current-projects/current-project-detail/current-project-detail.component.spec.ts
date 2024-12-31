import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../../../global/utils/pipes/alt-text.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CurrentProjectDetailComponent } from "./current-project-detail.component";
import { FilterLinkPipe } from "../../../global/utils/pipes/filter-link.pipe";
import { FilterPipe } from "../../../global/utils/pipes/filter.pipe";
import { LogoPipe } from "../../../global/utils/pipes/logo.pipe";
import { PillPipe } from "../../../global/utils/pipes/pill.pipe";
import { SkillPillsComponent } from "../../../global/skill-pills/skill-pills.component";
import { TechBarChartComponent } from "../../../global/tech-bar-chart/tech-bar-chart.component";

describe("CurrentProjectDetailComponent", () => {
  let component: CurrentProjectDetailComponent;
  let fixture: ComponentFixture<CurrentProjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        CurrentProjectDetailComponent,
        AltTextPipe,
        SkillPillsComponent,
        TechBarChartComponent,
        PillPipe,
        FilterPipe,
        LogoPipe,
        FilterLinkPipe
      ],
    });
    fixture = TestBed.createComponent(CurrentProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

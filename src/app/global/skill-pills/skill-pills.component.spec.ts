import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterLinkPipe } from "../utils/pipes/filter-link/filter-link.pipe";
import { FilterPipe } from "../utils/pipes/filter/filter.pipe";
import { LogoPipe } from "../utils/pipes/logo/logo.pipe";
import { PillPipe } from "../utils/pipes/pill/pill.pipe";
import { SkillPillsComponent } from "./skill-pills.component";

describe("SkillPillsComponent", () => {
  let component: SkillPillsComponent;
  let fixture: ComponentFixture<SkillPillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        LogoPipe,
        FilterLinkPipe,
        AltTextPipe,
        FilterLinkPipe
      ],
    });
    fixture = TestBed.createComponent(SkillPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

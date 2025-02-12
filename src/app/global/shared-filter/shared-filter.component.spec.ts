import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../utils/pipes/alt-text.pipe";
import { SharedFilterComponent } from "./shared-filter.component";
import { showcaseData } from "../data/showcase-data";

describe("SharedFilterComponent", () => {
  let component: SharedFilterComponent<{ skills: [] }>;
  let fixture: ComponentFixture<SharedFilterComponent<{ skills: [] }>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFilterComponent, AltTextPipe],
    });
    fixture = TestBed.createComponent(SharedFilterComponent<{ skills: [] }>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Testing resetFilter()", () => {
    beforeEach(() => {
      fixture.componentRef.setInput("config", {
        data: showcaseData,
        listLength: showcaseData.length,
        signalData: component["_globalService"].showcaseSignal$,
        resetValue: "UX/UI",
        options: ["A", "B", "C"],
      });
    });

    it("should reset the filter", () => {
      const spyTrigger = spyOn(component, "triggerFilter").and.callThrough();

      component.resetFilter();

      expect(component.filteredLength).toBe(0);
      expect(component["_globalService"].filterValue).toBe("");
      expect(spyTrigger).toHaveBeenCalledWith("UX/UI");
    });
  });

  describe("Testing openCloseFilter()", () => {
    beforeEach(() => {
      component.showFilterList = false;
    });

    it("should toggle the filter", () => {
      component.openCloseFilter();

      expect(component.showFilterList).toBeTruthy();
    });
  });

  describe("Testing changeViewLayout()", () => {
    beforeEach(() => {
      component.columnLayout = false;
    });

    it("should toggle the layout from grid to column", () => {
      component.changeViewLayout();

      expect(component.columnLayout).toBeTruthy();
    });
  });
});

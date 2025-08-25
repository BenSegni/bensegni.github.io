import {
  ComponentFixture,
  TestBed,
} from "@angular/core/testing";

import { Component } from "@angular/core";
import { DOMCreatorService } from "./shared/element.creation";
import { DOMCreatorServiceMock } from "./mocks/element.creation.mock";
import { ElementRef } from "@angular/core";
import { InfoDirective } from "./info.directive";

@Component({
    selector: "app-test-component",
    template: `<div></div>`,
    standalone: false
})
export class TestComponent {}

describe("InfoDirective", () => {
  let directive: InfoDirective;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [
        {
          provide: DOMCreatorService,
          useClass: DOMCreatorServiceMock,
        },
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement("div")),
        },
      ],
    });
    fixture = TestBed.createComponent(TestComponent);

    TestBed.runInInjectionContext(() => {
      directive = new InfoDirective();
    });

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(directive).toBeTruthy();
  });

  describe("Testing generateInfoBox()", () => {
    beforeEach(() => {
      directive.tooltip = {
        toolTipTitle: "Test",
        text: "test text",
        imageUrl: "testurl",
        link: "link",
        linkText: "link text",
      };
    });

    it("should create an HTML Element", () => {
      directive["generateInfoBox"]("text");
      expect(directive["generateInfoBox"]).toBeTruthy();
    });
  });

  describe("Testing generateInfoBox() without link or link text", () => {
    beforeEach(() => {
      directive.tooltip = {
        toolTipTitle: "Test",
        text: "test text",
        imageUrl: "testurl",
      };
    });

    it("should create an HTML Element", () => {
      directive["generateInfoBox"]("text");
      fixture.detectChanges();
      expect(directive["generateInfoBox"]).toBeTruthy();
    });
  });

  describe("Testing Hostlistener Events", () => {
    beforeEach(() => {
      directive.tooltip = {
        toolTipTitle: "Test",
        text: "test text",
        imageUrl: "testurl",
      };
    });

    it("should create tooltip on hover", () => {
      const spyInfoBox = spyOn<any>(directive, "generateInfoBox");
      directive.onHover();
      fixture.detectChanges();
      expect(spyInfoBox).toHaveBeenCalled();
    });

    it("should reset tooltip on leave", (done) => {
      const spyResetInfo = spyOn<any>(directive["_creator"], "resetInfoText");
      directive.onLeave();
      directive["delayReset$"].subscribe({
        complete: () => {
          expect(spyResetInfo).toHaveBeenCalled();
          done();
        },
      });
    });
  });
});

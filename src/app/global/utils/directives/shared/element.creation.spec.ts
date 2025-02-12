import { ElementRef, Renderer2, RendererFactory2 } from "@angular/core";

import { DOMCreatorService } from "./element.creation";
import { TestBed } from "@angular/core/testing";

describe("DOMCreatorService", () => {
  let service: DOMCreatorService;
  let renderer: Renderer2;
  let rendererFactory: jasmine.SpyObj<RendererFactory2>;

  beforeEach(() => {
    renderer = jasmine.createSpyObj("Renderer2", [
      "createElement",
      "createText",
      "appendChild",
      "addClass",
      "removeClass",
      "removeChild",
    ]);

    rendererFactory = jasmine.createSpyObj("RendererFactory2", [
      "createRenderer",
    ]);
    rendererFactory.createRenderer.and.returnValue(renderer);

    TestBed.configureTestingModule({
      providers: [
        DOMCreatorService,
        { provide: RendererFactory2, useValue: rendererFactory },
      ],
    });

    service = TestBed.inject(DOMCreatorService);
  });

  describe("addToParentNode", () => {
    it("should append child to parent element", () => {
      const parent = document.createElement("div");
      const child = document.createElement("span");

      service.addToParentNode(parent, child);

      expect(renderer.appendChild).toHaveBeenCalledWith(parent, child);
    });
  });

  describe("addAttribute", () => {
    it("should add attribute to element", () => {
      const element = document.createElement("div");
      const spy = spyOn(element, "setAttribute");

      service.addAttribute(element, "data-test", "value");

      expect(spy).toHaveBeenCalledWith("data-test", "value");
    });
  });

  describe("createDOMElement", () => {
    it("should create new DOM element", () => {
      (renderer.createElement as jasmine.Spy).and.returnValue(
        document.createElement("div")
      );

      service.createDOMElement("div");

      expect(renderer.createElement).toHaveBeenCalledWith("div");
    });
  });

  describe("createInnerText", () => {
    it("should create text node", () => {
      const text = "Test text";
      (renderer.createText as jasmine.Spy).and.returnValue(text);

      const result = service.createInnerText(text);

      expect(renderer.createText).toHaveBeenCalledWith(text);
      expect(result).toBe(text);
    });
  });

  describe("addClassDOMElement", () => {
    it("should add class to element", () => {
      const element = document.createElement("div");
      const spy = spyOn(element.classList, "add");

      service.addClassDOMElement(element, "test-class");

      expect(spy).toHaveBeenCalledWith("test-class");
    });
  });

  describe("createIconElement", () => {
    it("should create icon element with correct classes", () => {
      const elementRef = new ElementRef(document.createElement("icon"));

      service.createIconElement(elementRef);

      expect(renderer.addClass).toHaveBeenCalledWith(
        elementRef.nativeElement,
        "info-icon-wrapper"
      );
      expect(renderer.createElement).toHaveBeenCalledWith("icon");
    });
  });

  describe("resetInfoText", () => {
    it("should remove info box from element", () => {
      const parentElement = document.createElement("div");
      const infoBox = document.createElement("div");
      parentElement.appendChild(infoBox);

      const elementRef = new ElementRef(parentElement);
      const querySpy = spyOn(
        elementRef.nativeElement,
        "querySelector"
      ).and.returnValue(infoBox);

      service.resetInfoText(elementRef);

      expect(querySpy).toHaveBeenCalledWith("div");
      expect(renderer.removeChild).toHaveBeenCalledWith(
        elementRef.nativeElement,
        infoBox
      );
    });
  });
});

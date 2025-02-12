import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SynopsisHeaderSectionComponent } from "./synopsis-header-section.component";
import { showcaseData } from "../../../global/data/showcase-data";

describe("SynopsisHeaderSectionComponent", () => {
  let fixture: ComponentFixture<SynopsisHeaderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopsisHeaderSectionComponent],
    });
    fixture = TestBed.createComponent(SynopsisHeaderSectionComponent);
    fixture.detectChanges();
  });

  describe("Testing UI Display Values", () => {
    it("should display the title of the synopsis for Chinwé Roy", () => {
      fixture.componentRef.setInput("headerSection", {
        headerOne: showcaseData[0].projectTitle,
        headerTwo: showcaseData[0].description,
      });
      
      fixture.detectChanges();

      const mainTitle = fixture.nativeElement.querySelector("h1");
      // const mainTitle = fixture.debugElement.query(By.css('#title'));
      const subTitle = fixture.nativeElement.querySelector("h2");
      const skills = fixture.nativeElement.querySelector("h3");

      expect(mainTitle.innerText).toBe("Chinwe Chukwogu-Roy Biography Site");
      // expect(mainTitle.nativeElement.innerText).toBe("Chinwe Chukwogu-Roy Biography Site");
      expect(subTitle.innerText).toBe("Website for Renowned Portrait Artist.");
      expect(skills.innerText).toBe("Skills:");
    });

    it("should display the title of the synopsis for Distance Learning College & Training", () => {
      fixture.componentRef.setInput("headerSection", {
        headerOne: showcaseData[1].projectTitle,
        headerTwo: showcaseData[1].description,
      });
      
      fixture.detectChanges();

      const mainTitle = fixture.nativeElement.querySelector("h1");
      // const mainTitle = fixture.debugElement.query(By.css('#title'));
      const subTitle = fixture.nativeElement.querySelector("h2");
      const skills = fixture.nativeElement.querySelector("h3");

      expect(mainTitle.innerText).toBe("Distance Learning College & Training");
      // expect(mainTitle.nativeElement.innerText).toBe("Distance Learning College & Training");
      expect(subTitle.innerText).toBe("Website for Online Learning Company.");
      expect(skills.innerText).toBe("Skills:");
    });
  });
});

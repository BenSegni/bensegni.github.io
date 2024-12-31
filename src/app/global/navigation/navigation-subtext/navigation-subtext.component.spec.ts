import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AltTextPipe } from "../../utils/pipes/alt-text.pipe";
import { NavigationSubtextComponent } from "./navigation-subtext.component";
import { NavigationTextPipe } from "../../utils/pipes/navigation-text.pipe";
import { PillPipe } from "../../utils/pipes/pill.pipe";

describe("NavigationSubtextComponent", () => {
  let component: NavigationSubtextComponent;
  let fixture: ComponentFixture<NavigationSubtextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationSubtextComponent,
        AltTextPipe,
        NavigationTextPipe,
        PillPipe
      ],
    });
    fixture = TestBed.createComponent(NavigationSubtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

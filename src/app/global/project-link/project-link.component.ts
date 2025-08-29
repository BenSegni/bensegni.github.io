import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnChanges,
  SimpleChanges,
  input,
} from "@angular/core";

import { Showcase } from "../../pages/showcase/interface/showcase";
import { CommonModule } from "@angular/common";
import { PdfIconComponent } from "../icons/pdf-icon/pdf-icon.component";
import { BehanceIconComponent } from "../icons/behance-icon/behance-icon.component";
import { MediumIconComponent } from "../icons/medium-icon/medium-icon.component";

@Component({
  selector: "app-project-link",
  templateUrl: "./project-link.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PdfIconComponent,
    BehanceIconComponent,
    MediumIconComponent,
  ],
})
export class ProjectLinkComponent implements OnChanges {
  public project: InputSignal<Showcase | undefined> = input<Showcase>();
  public url = input("");
  public pdf = "View PDF Proposal";
  public behance = "Project Presentation";
  public medium = "Read on Medium";
  public isMedium = false;

  public get link(): string {
    if (this.project()?.downloadLink) {
      return this.project()?.downloadLink ?? "";
    }

    if (this.url()) {
      return this.url();
    }

    if (this.project()?.showCaseLink) {
      return this.project()?.showCaseLink ?? "";
    }

    return "";
  }

  get linkType(): string {
    const projectData = this.project();

    switch (true) {
      case projectData?.showCaseLink?.includes("medium"):
        return this.medium;
      case !!projectData?.showCaseLink:
        return this.behance;
      case !!projectData?.downloadLink:
        return this.pdf;
      default:
        return this.behance;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.project()) {
      if (this.project()?.showCaseLink?.includes("medium")) {
        this.isMedium = true;
      }
    }
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from "@angular/core";

import { Showcase } from "../../pages/showcase/interface/showcase";

@Component({
  selector: "app-project-link",
  templateUrl: "./project-link.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectLinkComponent implements OnInit, OnChanges {
  public project = input<Showcase>();
  public url = input<string>("");
  public pdf = "View PDF Proposal";
  public behance = "Project Presentation";
  public medium = "Read on Medium";
  public isMedium = false;
  public link = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.checkIfMediumLink()) {
        this.isMedium = true;
      }
      if (this.project()?.downloadLink) {
        this.link = this.project()?.downloadLink ?? "";
      }

      if (this.url()) {
        this.link = this.url();
      }

      if (this.project()?.showCaseLink) {
        this.link = this.project()?.showCaseLink ?? "";
      }

      this.link = "";
    }
  }

  public ngOnInit(): void {}

  private checkIfMediumLink(): boolean | undefined {
    return this.project()?.showCaseLink?.includes("medium");
  }

  public openLink(url: string): void {
    window.open(url, "_blank");
  }
}

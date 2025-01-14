import { Component, OnChanges, input, output } from "@angular/core";

import { GlobalDataService } from "../../../global/global-data.service";
import { Router } from "@angular/router";
import { Showcase } from "../../showcase/interface/showcase";

const inputInitialiser = {
  id: "",
  skills: [],
  projectTitle: "",
  description: "",
  showCaseLink: "",
  downloadLink: "",
  background: "",
  routeUrl: "",
  details: "",
  displayImages: [],
  relatedProjectId: "",
};

@Component({
  selector: "app-related-synopsis",
  templateUrl: "./related-synopsis.component.html",
  styleUrls: ["./related-synopsis.component.scss"],
})
export class RelatedSynopsisComponent
  extends GlobalDataService
  implements OnChanges
{
  public showcaseProject = input<Showcase>(inputInitialiser);

  public showcaseEmitter = output<Showcase>();
  public relatedProject: Showcase | undefined;

  public constructor(private _router: Router) {
    super();
  }

  public ngOnChanges(): void {
    this.findRelatedProject();
  }

  private findRelatedProject(): void {
    if (this.showcaseProject()) {
      const projects = this.showcaseSignal$();

      if (projects && projects.length > 0) {
        this.relatedProject = projects.find(
          (project) => this.showcaseProject()?.relatedProjectId === project.id
        );
      }
    }
  }

  public navigateToSynopsis(project: Showcase): void {
    this._router.navigate([`./showcase/` + project.routeUrl + "/synopsis"]);
    this.showcaseEmitter.emit(project);
  }
}

import {
  Component,
  EventEmitter,
  OnChanges,
  input,
  output,
} from "@angular/core";

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
}

@Component({
  selector: "app-related-synopsis",
  templateUrl: "./related-synopsis.component.html",
  styleUrls: ["./related-synopsis.component.scss"],
})
export class RelatedSynopsisComponent implements OnChanges {
  public showcaseProject = input<Showcase>(inputInitialiser);

  public showcaseEmitter = output<Showcase>();
  public relatedProject: Showcase | undefined;

  public constructor(
    private _globalService: GlobalDataService,
    private _router: Router
  ) {}

  public ngOnChanges(): void {
    this.findRelatedProject();
  }

  private findRelatedProject(): void {
    this.relatedProject = this._globalService
      .showcaseSignal$()
      .find((project) => this.showcaseProject()?.relatedProjectId === project.id);
  }

  public navigateToSynopsis(project: Showcase): void {
    this._router.navigate([`./showcase/` + project.routeUrl + "/synopsis"]);
    this.findRelatedProject();
    this.showcaseEmitter.emit(project);
  }
}

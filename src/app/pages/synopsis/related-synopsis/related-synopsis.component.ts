import {
  Component,
  InputSignal,
  OnChanges,
  inject,
  input,
  output,
} from "@angular/core";

import { GlobalDataService } from "../../../global/global-data.service";
import { Router, RouterLink } from "@angular/router";
import { Showcase } from "../../showcase/interface/showcase";
import { CommonModule } from "@angular/common";
import { SkillPillsComponent } from "src/app/global/skill-pills/skill-pills.component";

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
  imports: [RouterLink, CommonModule, SkillPillsComponent],
})
export class RelatedSynopsisComponent
  extends GlobalDataService
  implements OnChanges
{
  public showcaseProject: InputSignal<Showcase> =
    input<Showcase>(inputInitialiser);

  public showcaseEmitter = output<Showcase>();
  public relatedProject: Showcase | undefined;

  private _router: Router = inject(Router);

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

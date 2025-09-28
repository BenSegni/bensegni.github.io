import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Showcase } from "../interface/showcase";
import { SkillPillsComponent } from "../../../global/skill-pills/skill-pills.component";
import { ProjectDetailsLinkComponent } from "../project-details-link/project-details-link.component";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  imports: [SkillPillsComponent, ProjectDetailsLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  public project: InputSignal<Showcase> = input<Showcase>({
    id: "",
    skills: [""],
    projectTitle: "",
    description: "",
    background: "",
    routeUrl: "",
    details: "",
  });
}

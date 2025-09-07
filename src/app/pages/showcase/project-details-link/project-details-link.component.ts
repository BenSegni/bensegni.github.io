import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Showcase } from "../interface/showcase";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-project-details-link",
  templateUrl: "./project-details-link.component.html",
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsLinkComponent {
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

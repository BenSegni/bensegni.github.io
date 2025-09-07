import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { CurrentProject } from "../interface/project";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";

@Component({
  selector: "app-current-project-presentation",
  templateUrl: "./current-project-presentation.component.html",
  imports: [AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentProjectPresentationComponent {
  public currentProject: InputSignal<CurrentProject> = input<CurrentProject>({
    companyLogo: "",
    title: "",
    projects: [],
    presentationLink: "",
  });
}

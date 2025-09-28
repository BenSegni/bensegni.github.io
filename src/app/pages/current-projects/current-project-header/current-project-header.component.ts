import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { CurrentProject } from "../interface/project";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "../../..//global/utils/pipes/alt-text/alt-text.pipe";
@Component({
  selector: "app-current-project-header",
  templateUrl: "./current-project-header.component.html",
  imports: [CommonModule, AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentProjectHeaderComponent {
  public currentProject: InputSignal<CurrentProject> = input<CurrentProject>({
    companyLogo: "",
    title: "",
    projects: [],
    presentationLink: "",
  });
}

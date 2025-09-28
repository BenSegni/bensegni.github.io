import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from "@angular/core";
import { CurrentProject } from "../interface/project";
import { AltTextPipe } from "../../../global/utils/pipes/alt-text/alt-text.pipe";

@Component({
  selector: "app-current-project-presentation",
  templateUrl: "./current-project-presentation.component.html",
  imports: [AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
    `,
  ],
})
export class CurrentProjectPresentationComponent {
  public currentProject: InputSignal<CurrentProject> = input<CurrentProject>({
    companyLogo: "",
    title: "",
    projects: [],
    presentationLink: "",
  });
}

import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { Education } from "../interface/education";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "../../../../global/utils/pipes/alt-text/alt-text.pipe";

@Component({
  selector: "app-education-insert",
  templateUrl: "./education-insert.component.html",
  styleUrls: ["./education-insert.component.scss"],
  imports: [AltTextPipe, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationInsertComponent {
  public placement: InputSignal<Education> = input<Education>({
    logo: "",
    institution: "",
    date: "",
    qualification: "",
    website: "",
  });
}

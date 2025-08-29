import { Component, input, InputSignal } from "@angular/core";

import { Education } from "../interface/education";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";

@Component({
  selector: "app-education-insert",
  templateUrl: "./education-insert.component.html",
  styleUrls: ["./education-insert.component.scss"],
  imports: [AltTextPipe, CommonModule],
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

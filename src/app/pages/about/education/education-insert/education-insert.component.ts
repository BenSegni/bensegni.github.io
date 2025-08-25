import { Component, input, InputSignal } from "@angular/core";

import { Education } from "../interface/education";

@Component({
    selector: "app-education-insert",
    templateUrl: "./education-insert.component.html",
    styleUrls: ["./education-insert.component.scss"],
    standalone: false
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

import { Component, input } from "@angular/core";

import { Education } from "../interface/education";

@Component({
  selector: "app-education-insert",
  templateUrl: "./education-insert.component.html",
  styleUrls: ["./education-insert.component.scss"],
})
export class EducationInsertComponent {
  public placement = input<Education>({
    logo: "",
    institution: "",
    date: "",
    qualification: "",
    website: "",
  });
}

import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { Employment } from "../interface/employment";

import { SkillPillsComponent } from "../../../../global/skill-pills/skill-pills.component";
import { AltTextPipe } from "../../../../global/utils/pipes/alt-text/alt-text.pipe";
import { TechBarChartComponent } from "../../../../global/tech-bar-chart/tech-bar-chart.component";

@Component({
  selector: "app-employment-insert",
  templateUrl: "./employment-insert.component.html",
  styleUrls: ["./employment-insert.component.scss"],
  imports: [TechBarChartComponent, SkillPillsComponent, AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentInsertComponent {
  public role: InputSignal<Employment> = input({
    logo: "",
    company: "",
    date: "",
    title: "",
    successes: [""],
    technologies: [""],
    skillUsage: [
      {
        skill: "",
        usage: 0,
      },
    ],
  });
}

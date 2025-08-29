import { Component, Input } from "@angular/core";
import { Employment } from "../interface/employment";
import { TechBarChartComponent } from "src/app/global/tech-bar-chart/tech-bar-chart.component";
import { SkillPillsComponent } from "src/app/global/skill-pills/skill-pills.component";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";

@Component({
  selector: "app-employment-insert",
  templateUrl: "./employment-insert.component.html",
  styleUrls: ["./employment-insert.component.scss"],
  imports: [TechBarChartComponent, SkillPillsComponent, AltTextPipe],
})
export class EmploymentInsertComponent {
  @Input() public role: Employment | undefined;
}

import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { Project } from "../interface/project";
import { SkillPillsComponent } from "src/app/global/skill-pills/skill-pills.component";
import { TechBarChartComponent } from "src/app/global/tech-bar-chart/tech-bar-chart.component";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";
import { projectData } from "../../../data/project-data";

@Component({
  selector: "app-current-project-detail",
  templateUrl: "./current-project-detail.component.html",
  styleUrls: ["./current-project-detail.component.scss"],
  imports: [SkillPillsComponent, TechBarChartComponent, AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentProjectDetailComponent {
  public project: InputSignal<Project> = input<Project>(
    projectData.projects[0]
  );
}

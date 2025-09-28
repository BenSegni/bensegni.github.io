import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { Project } from "../interface/project";
import { SkillPillsComponent } from "../../../global/skill-pills/skill-pills.component";
import { TechBarChartComponent } from "../../../global/tech-bar-chart/tech-bar-chart.component";
import { AltTextPipe } from "../../../global/utils/pipes/alt-text/alt-text.pipe";
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

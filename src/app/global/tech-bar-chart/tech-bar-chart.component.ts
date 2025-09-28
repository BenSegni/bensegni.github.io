import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { TechUsage } from "./interface/tech.usage";
import { CommonModule } from "@angular/common";
import { LogoPipe } from "../utils/pipes/logo/logo.pipe";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";
import { PillPipe } from "../utils/pipes/pill/pill.pipe";

@Component({
  selector: "app-tech-bar-chart",
  templateUrl: "./tech-bar-chart.component.html",
  styleUrls: ["./tech-bar-chart.component.scss"],
  imports: [CommonModule, LogoPipe, AltTextPipe, PillPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBarChartComponent {
  public isEmployment: InputSignal<boolean> = input<boolean>(true);
  public skillsUsage: InputSignal<TechUsage[]> = input<TechUsage[]>([
    {
      skill: "Angular",
      usage: 3,
    },
    {
      skill: "Cypress",
      usage: 5,
    },
    {
      skill: "HTML5",
      usage: 6,
    },
    {
      skill: "Jasmine",
      usage: 7,
    },
  ]);
}

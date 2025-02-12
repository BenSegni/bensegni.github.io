import { Component, input } from "@angular/core";

import { TechUsage } from "./interface/tech.usage";

@Component({
  selector: "app-tech-bar-chart",
  templateUrl: "./tech-bar-chart.component.html",
  styleUrls: ["./tech-bar-chart.component.scss"],
})
export class TechBarChartComponent {
  public isEmployment = input<boolean>(true);
  public skillsUsage = input<TechUsage[]>([
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

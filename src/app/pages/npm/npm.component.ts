import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GlobalDataService } from "../../global/global-data.service";
import { NpmIconComponent } from "../../global/icons/npm-icon/npm-icon.component";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";

@Component({
  selector: "app-npm",
  templateUrl: "./npm.component.html",
  imports: [CommonModule, SkillPillsComponent, NpmIconComponent],
})
export class NpmComponent extends GlobalDataService {}

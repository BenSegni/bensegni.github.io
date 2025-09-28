import { Component } from "@angular/core";
import { GlobalDataService } from "../../global/global-data.service";
import { SkillPillsComponent } from "../../global/skill-pills/skill-pills.component";
import { GithubIconComponent } from "../../global/icons/github-icon/github-icon.component";
import { InfoDirective } from "../../global/utils/directives/info.directive";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  imports: [
    SkillPillsComponent,
    GithubIconComponent,
    InfoDirective,
    CommonModule,
  ],
})
export class GithubComponent extends GlobalDataService {}

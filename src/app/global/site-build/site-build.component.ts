import { Component, inject } from "@angular/core";
import { SkillPillsComponent } from "../skill-pills/skill-pills.component";
import { ProjectLinkComponent } from "../project-link/project-link.component";
import { VersionService } from "../services/version/version.service";

@Component({
  selector: "app-site-build",
  templateUrl: "./site-build.component.html",
  imports: [SkillPillsComponent, ProjectLinkComponent],
})
export class SiteBuildComponent {
  public specification: string[] = [
    "Angular",
    "Github",
    "Jasmine",
    "Inkscape",
    "RxJs",
    "SASS",
    "Typescript",
    "Visual Studio",
  ];
  public presentationLink =
    "https://www.behance.net/gallery/188393735/Personal-Professional-Website-Build";
  public buildCopy =
    "This portfolio website has been build with the following technologies &amp; software:";
  public mobileCopy =
    "This site renders across small mobile, mobile, tablet &amp; Desktop, with Rich UI PWA Integration for both Desktop &amp; Mobile.";

  public version = "1.0.0";

  private _versionService: VersionService = inject(VersionService);

  constructor() {
    this.version = this._versionService.getVersion();
  }
}

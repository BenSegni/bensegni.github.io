import { Component, inject, OnInit } from "@angular/core";

import { GlobalDataService } from "../../global/global-data.service";
import { Router, RouterLink } from "@angular/router";
import { ShareButtonConfig } from "../../global/share-icon-button/interface/share.button";
import { Showcase } from "../showcase/interface/showcase";
import { SynopsisBackLinkComponent } from "./synopsis-back-link/synopsis-back-link.component";
import { SynopsisHeaderDisplayComponent } from "./synopsis-header-display/synopsis-header-display.component";
import { SynopsisHeaderSectionComponent } from "./synopsis-header-section/synopsis-header-section.component";
import { SkillPillsComponent } from "src/app/global/skill-pills/skill-pills.component";
import { GridDisplayComponent } from "./grid-display/grid-display.component";
import { ShareIconsComponent } from "src/app/global/share-icons/share-icons.component";
import { RelatedSynopsisComponent } from "./related-synopsis/related-synopsis.component";
import { CommonModule } from "@angular/common";
import { ContactDetailsComponent } from "../contact/contact-details/contact-details.component";
import { ProjectLinkComponent } from "src/app/global/project-link/project-link.component";
import { LoadingGraphicComponent } from "../../global/loading-graphic/loading-graphic.component";

@Component({
  selector: "app-synopsis",
  templateUrl: "./synopsis.component.html",
  imports: [
    SynopsisBackLinkComponent,
    SynopsisHeaderDisplayComponent,
    SynopsisHeaderSectionComponent,
    SkillPillsComponent,
    LoadingGraphicComponent,
    GridDisplayComponent,
    ShareIconsComponent,
    RelatedSynopsisComponent,
    CommonModule,
    RouterLink,
    ContactDetailsComponent,
    ProjectLinkComponent,
  ],
})
export class SynopsisComponent extends GlobalDataService implements OnInit {
  public showcaseProject: Showcase | undefined;
  public relatedProject: Showcase | undefined;
  public openButton = "../../../assets/img/new_window_blue_icon.svg";
  public logo = "../../../assets/img/logo.svg";
  public shareUrl = "";
  public shareButtonConfig: ShareButtonConfig;

  private projects = this.showcaseSignal$();
  private _router: Router = inject(Router);

  public constructor() {
    super();
    this.isLoading = true;

    this.shareButtonConfig = {
      title: "project",
      buttons: [
        {
          shareType: "facebook",
          shareUrl: `https://bensegni.github.io${this._router.url}`,
        },
        {
          shareType: "X",
          shareUrl: `https://bensegni.github.io${this._router.url}`,
        },
        {
          shareType: "linkedin",
          shareUrl: `https://bensegni.github.io${this._router.url}`,
        },
      ],
    };

    this.shareUrl = `https://bensegni.github.io${this._router.url}`;
  }

  public ngOnInit(): void {
    const pageUrl = this._router.routerState.snapshot.url;

    this.showcaseProject = this.projects.find((project) =>
      pageUrl.includes(project.routeUrl)
    );

    this.onLoad();
  }
}
